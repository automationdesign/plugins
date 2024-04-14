// сначала пройтись по каждому выбранному элементу
figma.currentPage.selection.forEach((node) => {
    // проверяем что выбран фрейм
    if (node.type == 'FRAME') {
        // находим прямоугольники внутри фрейма
        node.findAllWithCriteria({
            types: ['RECTANGLE'],
        }).forEach((rect) => {
            rect.cornerSmoothing = 0.6;
        });
    }
});
