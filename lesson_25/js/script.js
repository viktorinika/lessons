// Домашня робота.
'use strict'


// Задача №1
// Отримати в константу елемент <body>
// Відповідь:

// const bodyElement  = document.body;
// console.log(bodyElement);

//----------------------------------------------------------------------------------------

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
// Відповідь:


// function addList(liCount = 1) {
//     const bodyElement = document.body;

//     const listId = 'list';
//     let listElement = document.getElementById(listId);

//     if (!listElement) {
//         const list = document.createElement('ul');
//         list.setAttribute('id', listId);
//         bodyElement.append(list);

//         listElement = document.getElementById(listId);
//     }

//     const listElementsCount = listElement.children.length;

//     console.log(listElementsCount);

//     for (let i = listElementsCount; i < listElementsCount + liCount; ++i) {
//         const listItem = document.createElement('li');
//         listItem.classList.add('list-item', `list-item-${i}`);
//         listItem.innerText = `I am listItem - ${i + 1}`

//         listElement.append(listItem);
//     }
// }

// addList(3)
// addList(2)
// addList(12)
// addList(8)

//----------------------------------------------------------------------------------------

// Задача №3
// Додати до елементу <body> клас loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зелений.

// Відповідь:

// const bodyElement = document.body;
// bodyElement.classList.add('loaded');

// if(bodyElement.classList.contains('loaded')){
//     bodyElement.style.color = 'green';
// }
// console.log(bodyElemen);

//----------------------------------------------------------------------------------------

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

// Відповідь:

// const listDiv = document.querySelectorAll('.item');

// listDiv.forEach((itemDiv, index) => {
//     itemDiv.classList.add('active');
//     itemDiv.textContent = `Елемент № ${++index}`;
// });
// console.log(listDiv);
//----------------------------------------------------------------------------------------

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

// Відповідь:
// const button = document.querySelector('.button');
// function scrollToElement(element) {
//     element.scrollIntoView({
//         block: 'end',
//         inline: 'nearest',
//         behavior: 'smooth'
//     });
// }
// scrollToElement(button);

//----------------------------------------------------------------------------------------
// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Потім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

// Відповідь:

// const linkElement = document.querySelector('.link');
// linkElement.dataset.weight = '100';
// const dataWeight = parseFloat(linkElement.getAttribute('data-weight'));

// if (dataWeight < 200) {
//     linkElement.style.color = 'red';
// }

//----------------------------------------------------------------------------------------


