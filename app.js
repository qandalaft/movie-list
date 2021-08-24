'use strict'

let imgArray = ['../img/action.png', '/img/adventure.png',
    '/img/animation.png', '/img/comedy.png', '/img/detective.png',
    '/img/fantasy.png', '/img/history.png', '/img/horror.png', '/img/musical.png', '/img/pirate.png',
    '/img/romantic.png', '/img/sci-fi.png', '/img/war.png', '/img/western.png'];


let mainForm = document.getElementById('mainForm');
let dataTable = document.getElementById('data');
let elementTable = document.createElement('table');
dataTable.appendChild(elementTable)

function All(name, image, release) {
    this.name = name;
    this.image = image;
    this.release = release;
    All.contaner.push(this);


}
All.contaner = [];

// image Array render
for (let i = 0; i < imgArray.length; i++) {
    this.image = imgArray[i];
    // console.log(this.image);
}

All.prototype.render = function () {
    let creatTr = document.createElement('tr');
    elementTable.appendChild(creatTr);
    // console.log(creatTr);
    let creatTd = document.createElement('td');
    creatTd.textContent = `${this.name}  ${'  '}`;
    // console.log(creatTd.textContent);
    creatTr.appendChild(creatTd);
    let creatTd1 = document.createElement('td');
    let creatImg = document.createElement('img');
    creatTd1.appendChild(creatImg);
    creatTd1.setAttribute('src', '/img/adventure.png');
    creatTd1.textContent = this.image;
    console.log(creatTd1.textContent);
    creatTr.appendChild(creatTd1);
    let creatTd2 = document.createElement('td');
    creatTd2.textContent = this.release;
    creatTr.appendChild(creatTd2);

}

mainForm.addEventListener('submit', displayData)
function displayData(e) {
    e.preventDefault()
    let theName = document.getElementById('name').value;
    let theImage = document.getElementById('image').value;
    let theRelease = document.getElementById('rel').value;
    let result = new All(theName, theImage, theRelease);
    result.render();
    localStorage.result1 = JSON.stringify(All.contaner);

}

function getData() {
    let store = JSON.parse(localStorage.getItem('result1')) || [];
    for (let i = 0; i < store.length; i++) {
        let user = new All(store[i].name, store[i].image, store[i].release,)
        user.render()
    }
}