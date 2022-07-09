
let puzzles = [
    {id: 1, img: '1', text: 'пазл 1', class: 'red' },
    {id: 2, img: '2', text: 'пазл 2', class: 'yellow' },
    {id: 3, img: '3', text: 'пазл 3', class: 'green' },
    {id: 4, img: '4', text: 'пазл 4', class: 'blue' },
];

let firstArea = document.querySelector('.first-area');

puzzles.map((item, index) => {
    firstArea.innerHTML += `<div class="${item.class}">${item.text}</div>`
});

