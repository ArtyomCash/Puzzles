// setData метод при помощи которого отправляем данные
const dragstart = function(event) {
    event.dataTransfer.setData('text', event.target.id);
};
// принимающая сторона
const dragover = function(event) {
    if(event.target.nodeName.toLowerCase() === 'img') {
        return true;
    }
    event.preventDefault();
};
// получаем id картинки и перемещаем в ячейку
const drop = function(event) {
    event.preventDefault();
    let imageId = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(imageId));
};

// разрешаем или не разрешаем перетаскивание элемента
const cell = document.getElementsByClassName('col');
Array.from(cell).forEach((element) => {
    element.addEventListener('dragover', dragover);
    element.addEventListener('drop', drop);
});
// выбираем картинки по тегу img и привязали к обработчику событий
const images = document.getElementsByTagName('img');
Array.from(images).forEach((element) => {
    element.addEventListener('dragstart', dragstart);
});

