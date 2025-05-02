// data.js

const cheatsheetData = [
    // ======= HTML (30) =======
    {
    category: "html",
    title: "Заголовок (h1)",
    description: "Великий заголовок сторінки.",
    code: `<h1>Привіт!</h1>`
    },
    {
    category: "html",
    title: "Абзац (p)",
    description: "Абзац тексту.",
    code: `<p>Це абзац тексту.</p>`
    },
    {
    category: "html",
    title: "Посилання (a)",
    description: "Гіперпосилання на інший сайт.",
    code: `<a href="https://google.com">Google</a>`
    },
    {
    category: "html",
    title: "Зображення (img)",
    description: "Вставка зображення.",
    code: `<img src="photo.jpg" alt="Фото">`
    },
    {
    category: "html",
    title: "Список ul/li",
    description: "Ненумерований список.",
    code: `<ul>\n  <li>Пункт 1</li>\n  <li>Пункт 2</li>\n</ul>`
    },
    {
    category: "html",
    title: "Список ol/li",
    description: "Нумерований список.",
    code: `<ol>\n  <li>Перший</li>\n  <li>Другий</li>\n</ol>`
    },
    {
    category: "html",
    title: "Таблиця (table)",
    description: "Базова таблиця.",
    code: `<table>\n<tr><th>Ім'я</th><th>Вік</th></tr>\n<tr><td>Іван</td><td>20</td></tr>\n</table>`
    },
    {
    category: "html",
    title: "Див (div)",
    description: "Контейнер-блок.",
    code: `<div>Це блок</div>`
    },
    {
    category: "html",
    title: "Спан (span)",
    description: "Строчний контейнер.",
    code: `<span>Це текст</span>`
    },
    {
    category: "html",
    title: "Перенос рядка (br)",
    description: "Перехід на новий рядок.",
    code: `Текст<br>Новий текст`
    },
    {
    category: "html",
    title: "Лінія (hr)",
    description: "Горизонтальна лінія.",
    code: `<hr>`
    },
    {
    category: "html",
    title: "Поле вводу (input)",
    description: "Поле вводу тексту.",
    code: `<input type="text">`
    },
    {
    category: "html",
    title: "Кнопка (button)",
    description: "Створення кнопки.",
    code: `<button>Натисни мене</button>`
    },
    {
    category: "html",
    title: "Форма (form)",
    description: "HTML-форма для відправки даних.",
    code: `<form action="">...</form>`
    },
    {
    category: "html",
    title: "Мітка (label)",
    description: "Підпис до поля вводу.",
    code: `<label>Ім'я:</label>`
    },
    {
    category: "html",
    title: "Випадаючий список (select)",
    description: "Список вибору.",
    code: `<select><option>Опція 1</option></select>`
    },
    {
    category: "html",
    title: "Текстове поле (textarea)",
    description: "Многострокове текстове поле.",
    code: `<textarea rows="4" cols="50"></textarea>`
    },
    {
    category: "html",
    title: "Iframe",
    description: "Вставка іншої сторінки.",
    code: `<iframe src="page.html"></iframe>`
    },
    {
    category: "html",
    title: "Шапка (header)",
    description: "Шапка сайту.",
    code: `<header>Це шапка</header>`
    },
    {
    category: "html",
    title: "Підвал (footer)",
    description: "Підвал сайту.",
    code: `<footer>Це підвал</footer>`
    },
    {
    category: "html",
    title: "Навігація (nav)",
    description: "Меню сайту.",
    code: `<nav>Меню</nav>`
    },
    {
    category: "html",
    title: "Стаття (article)",
    description: "Контент статті.",
    code: `<article>Це стаття</article>`
    },
    {
    category: "html",
    title: "Розділ (section)",
    description: "Секція сторінки.",
    code: `<section>Це секція</section>`
    },
    {
    category: "html",
    title: "Аудіо (audio)",
    description: "Відтворення аудіо.",
    code: `<audio src="music.mp3" controls></audio>`
    },
    {
    category: "html",
    title: "Відео (video)",
    description: "Відтворення відео.",
    code: `<video src="video.mp4" controls></video>`
    },
    
    // ======= CSS (30) =======
    {
    category: "css",
    title: "Колір тексту (color)",
    description: "Зміна кольору тексту.",
    code: `p {\n  color: red;\n}`
    },
    {
    category: "css",
    title: "Фон (background-color)",
    description: "Колір фону.",
    code: `body {\n  background-color: lightblue;\n}`
    },
    {
    category: "css",
    title: "Розмір шрифту (font-size)",
    description: "Зміна розміру шрифту.",
    code: `h1 {\n  font-size: 30px;\n}`
    },
    {
    category: "css",
    title: "Шрифт (font-family)",
    description: "Вибір шрифта.",
    code: `p {\n  font-family: Arial, sans-serif;\n}`
    },
    {
    category: "css",
    title: "Товщина шрифта (font-weight)",
    description: "Зробити текст жирним.",
    code: `strong {\n  font-weight: bold;\n}`
    },
    {
        category: "css",
        title: "Вирівнювання тексту (text-align)",
        description: "Вирівнювання по центру.",
        code: `p {\n  text-align: center;\n}`
        },
        {
        category: "css",
        title: "Підкреслення (text-decoration)",
        description: "Додати або прибрати підкреслення.",
        code: `a {\n  text-decoration: none;\n}`
        },
        {
        category: "css",
        title: "Відступи зовні (margin)",
        description: "Встановити зовнішній відступ.",
        code: `div {\n  margin: 10px;\n}`
        },
        {
        category: "css",
        title: "Відступи всередині (padding)",
        description: "Встановити внутрішній відступ.",
        code: `div {\n  padding: 15px;\n}`
        },
        {
        category: "css",
        title: "Рамка (border)",
        description: "Додати рамку навколо елемента.",
        code: `div {\n  border: 1px solid black;\n}`
        },
        {
        category: "css",
        title: "Ширина (width)",
        description: "Встановити ширину елемента.",
        code: `img {\n  width: 100px;\n}`
        },
        {
        category: "css",
        title: "Висота (height)",
        description: "Встановити висоту елемента.",
        code: `img {\n  height: 100px;\n}`
        },
        {
        category: "css",
        title: "Відображення (display)",
        description: "Тип відображення елемента.",
        code: `span {\n  display: block;\n}`
        },
        {
        category: "css",
        title: "Позиціонування (position)",
        description: "Тип позиціонування елемента.",
        code: `div {\n  position: relative;\n}`
        },
        {
        category: "css",
        title: "Тінь блока (box-shadow)",
        description: "Додати тінь до блоку.",
        code: `div {\n  box-shadow: 2px 2px 5px gray;\n}`
        },
        {
        category: "css",
        title: "Тінь тексту (text-shadow)",
        description: "Додати тінь до тексту.",
        code: `h1 {\n  text-shadow: 1px 1px 2px black;\n}`
        },
        {
        category: "css",
        title: "Гнучке вирівнювання (flex)",
        description: "Гнучке позиціонування елементів.",
        code: `div {\n  display: flex;\n}`
        },
        {
        category: "css",
        title: "Сітка (grid)",
        description: "Розміщення елементів сіткою.",
        code: `div {\n  display: grid;\n}`
        },
        {
        category: "css",
        title: "Перехід (transition)",
        description: "Анімація зміни стилю.",
        code: `a {\n  transition: 0.3s;\n}`
        },
        {
        category: "css",
        title: "Трансформація (transform)",
        description: "Обертання, масштабування тощо.",
        code: `div {\n  transform: rotate(45deg);\n}`
        },
        {
        category: "css",
        title: "Прозорість (opacity)",
        description: "Зміна прозорості елемента.",
        code: `img {\n  opacity: 0.5;\n}`
        },
        {
        category: "css",
        title: "Курсор (cursor)",
        description: "Тип курсора над елементом.",
        code: `a {\n  cursor: pointer;\n}`
        },
        {
        category: "css",
        title: "Видимість (visibility)",
        description: "Приховати або показати елемент.",
        code: `div {\n  visibility: hidden;\n}`
        },
        {
        category: "css",
        title: "Переповнення (overflow)",
        description: "Поводження з переповненням.",
        code: `div {\n  overflow: auto;\n}`
        },
        {
        category: "css",
        title: "z-index",
        description: "Порядок накладання елементів.",
        code: `div {\n  z-index: 10;\n}`
        },
        {
        category: "css",
        title: "justify-content (flex/grid)",
        description: "Вирівнювання елементів по горизонталі.",
        code: `div {\n  justify-content: center;\n}`
        },
        {
        category: "css",
        title: "align-items (flex/grid)",
        description: "Вирівнювання елементів по вертикалі.",
        code: `div {\n  align-items: center;\n}`
        },
        {
        category: "css",
        title: "gap (flex/grid)",
        description: "Відступи між елементами.",
        code: `div {\n  gap: 10px;\n}`
        },
        {
        category: "css",
        title: "Фонове зображення (background-image)",
        description: "Встановити фонове зображення.",
        code: `body {\n  background-image: url(bg.jpg);\n}`
        },
        
        // ======= JavaScript (30) =======
        {
        category: "js",
        title: "Оголошення змінної (let)",
        description: "Створення змінної.",
        code: `let name = "Іван";`
        },
        {
        category: "js",
        title: "Константа (const)",
        description: "Створення незмінної константи.",
        code: `const pi = 3.14;`
        },
        {
        category: "js",
        title: "Умова (if)",
        description: "Перевірка умови.",
        code: `if (a > b) {\n  alert('A більше');\n}`
        },
        {
        category: "js",
        title: "Цикл for",
        description: "Цикл з лічильником.",
        code: `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`
        },
        {
        category: "js",
        title: "Цикл while",
        description: "Цикл з перевіркою умови.",
        code: `while (i < 5) {\n  i++;\n}`
        },
        {
        category: "js",
        title: "Функція (function)",
        description: "Оголошення функції.",
        code: `function sayHi() {\n  alert('Привіт');\n}`
        },
        {
        category: "js",
        title: "alert()",
        description: "Показати повідомлення.",
        code: `alert('Привіт, світ!');`
        },
        {
        category: "js",
        title: "console.log()",
        description: "Вивести в консоль.",
        code: `console.log('Текст');`
        },
        {
        category: "js",
        title: "document.getElementById()",
        description: "Знайти елемент за id.",
        code: `document.getElementById('id')`
        },
        {
        category: "js",
        title: "addEventListener",
        description: "Додати обробник події.",
        code: `btn.addEventListener('click', function() {\n  alert('Клік!');\n});`
        },
        {
        category: "js",
        title: "setTimeout()",
        description: "Відкласти виконання коду.",
        code: `setTimeout(function() {\n  alert('Через 1 сек');\n}, 1000);`
        },
        {
        category: "js",
        title: "setInterval()",
        description: "Повторювати код кожні N мс.",
        code: `setInterval(function() {\n  console.log('Кожну секунду');\n}, 1000);`
        },
        {
        category: "js",
        title: "Math.random()",
        description: "Випадкове число [0,1).",
        code: `let r = Math.random();`
        },
        {
        category: "js",
        title: "Math.floor()",
        description: "Округлення вниз.",
        code: `let r = Math.floor(4.9);`
        },
        {
        category: "js",
        title: "Масив (Array)",
        description: "Створення масиву.",
        code: `let arr = [1,2,3];`
        },
        {
        category: "js",
        title: "push()",
        description: "Додати в масив.",
        code: `arr.push(4);`
        },
        {
        category: "js",
        title: "pop()",
        description: "Видалити з масиву останній елемент.",
        code: `arr.pop();`
        },
        {
        category: "js",
        title: "map()",
        description: "Перетворення масиву.",
        code: `arr.map(x => x*2);`
        },
        {
        category: "js",
        title: "filter()",
        description: "Фільтрація масиву.",
        code: `arr.filter(x => x > 2);`
        },
        {
        category: "js",
        title: "includes()",
        description: "Перевірка наявності значення.",
        code: `arr.includes(3);`
        },
        {
        category: "js",
        title: "join()",
       description: "Об'єднання елементів масиву.",
        code: `arr.join(', ');`
        },
        {
        category: "js",
        title: "Об'єкт (Object)",
        description: "Створення об'єкта.",
        code: `let obj = {name: 'Іван'};`
        },
        {
        category: "js",
        title: "forEach()",
        description: "Перебір масиву.",
        code: `arr.forEach(x => console.log(x));`
        },
        {
        category: "js",
        title: "localStorage",
        description: "Збереження даних в браузері.",
        code: `localStorage.setItem('key', 'value');`
        },
        {
        category: "js",
        title: "JSON.parse()",
        description: "Розбір JSON строки в об'єкт.",
        code: `let obj = JSON.parse(jsonStr);`
        },
        {
        category: "js",
        title: "JSON.stringify()",
        description: "Перетворення об'єкта в JSON строку.",
        code: `let json = JSON.stringify(obj);`
        },
        {
        category: "js",
        title: "try/catch",
        description: "Обробка помилок.",
        code: `try {\n  // код\n} catch(e) {\n  alert(e);\n}`
        },
        {
        category: "js",
        title: "document.createElement()",
        description: "Створити новий елемент.",
        code: `let div = document.createElement('div');`
        }
 ];
