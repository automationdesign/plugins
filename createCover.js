// Запускаем функцию
createCover()

// Сама функция
// Слово async означает что функция асинхронная, это нужно для загрузки шрифта
async function createCover() {

    // Создаем пустой фрейм
    const coverFrame = figma.createFrame()

    // Задаем размер
    coverFrame.resize(1920, 1080)

    // Добавляем фрейм на страницу
    figma.currentPage.appendChild(coverFrame)


    // Создаем текстовый блок для заголовка
    const titleText = figma.createText()

    // Загружаем шрифт для заголовка
    await figma.loadFontAsync({ family: "IBM Plex Mono", style: "Bold" });

    // Задаем шрифт для блока текста
    titleText.fontName = { family: "IBM Plex Mono", style: "Bold" }

    // Задаем размер шрифта и координаты
    titleText.fontSize = 136
    titleText.x = 100
    titleText.y = 100

    // Задаем текст для блока, берем его из заголовка документа
    titleText.characters = figma.root.name

    // Добавляем текстовый блок на страницу
    coverFrame.appendChild(titleText)

    // Добавляем имя пользователя
    const authorText = figma.createText()

    // Загружаем шрифт для заголовка
    await figma.loadFontAsync({ family: "IBM Plex Mono", style: "Regular" });

    // Задаем шрифт для блока текста
    authorText.fontName = { family: "IBM Plex Mono", style: "Regular" }

    // Задаем текст для автора файла, берем имя текущего пользователя
    authorText.characters = `Автор ${figma.currentUser.name}`

    // Задаем размер шрифта и координаты
    authorText.fontSize = 44
    authorText.x = 100
    authorText.y = 100 + 200 + 8

    // Добавляем текстовый блок на страницу
    coverFrame.appendChild(authorText)

}