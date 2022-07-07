let area = document.getElementById('area');
let box = document.getElementsByClassName('box');
let currentPlayer = document.getElementById('curPlyr');

let player = "x";
let stat = {
    'x': 0,
    'o': 0,
    'd': 0
};
let winIndex = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

for(let i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='box' pos=" + i + "></div>";
}

for (let i = 0; i< box.length; i++) {
    box[i].addEventListener('click', boxClick, false);
}

function boxClick() {

    let data = [];
    
    if(!this.innerHTML) {
        this.innerHTML = player;
    }else {
        alert("Ячейка занята");
        return;
    }

    for(let i in box){
        if(box[i].innerHTML === player){
            data.push(parseInt(box[i].getAttribute('pos')));
        }
    }

    if(checkWin(data)) {
        stat[player] += 1;
        restart("Выграл: " + player);
    }else {
        let draw = true;
        for(let i in box) {
            if(box[i].innerHTML === '') draw = false;
        }
        if(draw) {
            stat.d += 1;
            restart("Ничья");
        }
    }

    player = player === "x" ? "o" : "x";
    currentPlayer.innerHTML = player.toUpperCase();
}

function checkWin(data) {
    for(let i in winIndex) {
        let win = true;
        for(let j in winIndex[i]) {
            let id = winIndex[i][j];
            let ind = data.indexOf(id);

            if(ind === -1) {
                win = false
            }
        }

        if(win) return true;
    }
    return false;
}

function restart(text) {
    
    alert(text);
    for(let i = 0; i < box.length; i++) {
        box[i].innerHTML = '';
    }
    updateStat();
}

function updateStat() {
    document.getElementById('sX').innerHTML = stat.x;
    document.getElementById('sO').innerHTML = stat.o;
    document.getElementById('sD').innerHTML = stat.d;
}