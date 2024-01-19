document.getElementById('container');
document.querySelector('#container');
document.querySelectorAll('.second');
document.querySelector('ol .third');
const section = document.querySelector('#container');   section.innerText = "Hello";
const footerElement = document.querySelector('.footer');    footerElement.classList.add('main');
footerElement.classList.remove('main');
document.createElement('li');
const newItem = document.createElement('li');   newItem.textContent = 'four';
document.querySelector('ul').appendChild(newItem);
//question 11
const lis = document.querySelectorAll('ol li'); 
lis.forEach(function(li) {
    li.style.backgroundColor = 'green';
});
   //question 12
   const footer = document.querySelector('.footer');
   footer.remove();