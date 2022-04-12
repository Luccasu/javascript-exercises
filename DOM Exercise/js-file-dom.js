// const container = document.querySelector('#container');
// const paragraph = document.createElement('p');
// content.classList.add('paragraph');
// content.textContent = 'I am a red paragraph';
// content.style.color = 'red';
// container.appendChild(paragraph);

const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Hey I\'m a red paragraph!';
content.style.color = 'red';
container.appendChild(content);

const headerThree = document.createElement('h3');
headerThree.classList.add('headerThree');
headerThree.textContent = 'Now I\'m a blue header!'
headerThree.style.color = 'blue';
container.appendChild(headerThree);

// const blackDiv = document.createElement('div');
// blackDiv.classList.add('blackDiv');
// blackDiv.style.cssText = 'border: 1px solid black: background-color: pink;'
// container.appendChild(blackDiv);

const blackBox = document.createElement('div')
blackBox.style.cssText = 'border: 1px solid black; background-color: pink;'
const headerOne = document.createElement('h1')
headerOne.textContent = "I'm in a div"
const anotherPara = document.createElement('p')
anotherPara.textContent = "ME TOO!"
blackBox.appendChild(headerOne)
blackBox.appendChild(anotherPara)
container.appendChild(blackBox)