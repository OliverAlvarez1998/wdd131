buttonElement.addEventListener('click', function () {
    
});

buttonElement.addEventListener('keyup', function () {
    
});

document.addEventListener("DOMcontentloaded", function () {
    
});


const input = document.querySelector('#favchat');
const button = document.querySelector('button');
const list = document.querySelector('list');

const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);





buttonElement.addEventListener('click', function () {
    //code to execute when the botton is clicled
});


if (input.value.trim() !== 'addchapter') {

}

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus()
});

input.value = '';

input.focus();