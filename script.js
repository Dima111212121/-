let currentCategory = "html";

function showCategory(category) {
    currentCategory = category;

    // Подсветка активной кнопки
    document.getElementById('btn-html').classList.remove('active');
    document.getElementById('btn-css').classList.remove('active');
    document.getElementById('btn-js').classList.remove('active');

    document.getElementById('btn-' + category).classList.add('active');

    renderResults();
}

function searchHints() {
    renderResults();
}

function renderResults() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');

    resultsDiv.innerHTML = '';

    const filteredData = cheatsheetData.filter(item => {
        const matchesCategory = item.category === currentCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchInput) || item.description.toLowerCase().includes(searchInput);
        return matchesCategory && matchesSearch;
    });

    if (filteredData.length === 0) {
        resultsDiv.innerHTML = '<p>❌ Нічого не знайдено</p>';
        return;
    }

    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('h3');
        title.textContent = item.title;

        const desc = document.createElement('p');
        desc.textContent = item.description;

        const codeBlock = document.createElement('pre');
        const codeElement = document.createElement('code');
        codeElement.textContent = item.code;
        codeBlock.appendChild(codeElement);

        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(codeBlock);

        resultsDiv.appendChild(card);
    });

    // Подсветка кода
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
}

// Переключение темы
function toggleTheme() {
    const isLight = document.body.classList.toggle('light');

    const darkTheme = document.getElementById('hljs-dark');
    const lightTheme = document.getElementById('hljs-light');

    if (isLight) {
        darkTheme.disabled = true;
        lightTheme.disabled = false;
        localStorage.setItem('theme', 'light');
    } else {
        darkTheme.disabled = false;
        lightTheme.disabled = true;
        localStorage.setItem('theme', 'dark');
    }
}

// Применение темы при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    let savedTheme = localStorage.getItem('theme');

    if (!savedTheme) {
        // Если тема не сохранена — определим по системной настройке
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        savedTheme = prefersLight ? 'light' : 'dark';
    }

    if (savedTheme === 'light') {
        document.body.classList.add('light');
        document.getElementById('hljs-dark').disabled = true;
        document.getElementById('hljs-light').disabled = false;
    } else {
        document.getElementById('hljs-dark').disabled = false;
        document.getElementById('hljs-light').disabled = true;
    }

    renderResults(); // Первичная отрисовка
});

