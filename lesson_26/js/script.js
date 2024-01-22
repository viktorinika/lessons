// Домашря робота.

'use strict'

//------------------------------------------------------------------------------------------

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 

// Відповідь:

const itemsElement = document.querySelectorAll('.item');

itemsElement.forEach(itemElement => {
	itemElement.addEventListener('click', () => {
		itemElement.classList.toggle('active');
	});
});

//-------------------------------------------------------------------------------------------

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

// Відповідь:

const bodyElement = document.querySelector('body');
window.addEventListener ('load', addClassBody);

function addClassBody (e) {
    if(e.type === 'load') {
        bodyElement.classList.add('removeTransparent');
        bodyElement.style.backgroundColor = 'rgb(196, 226, 255)';
    }
}

//-------------------------------------------------------------------------------------------
// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

// Відповідь:

const headerElenent = document.querySelector('header');
const footerElenent = document.querySelector('footer');

headerElenent.addEventListener('mouseenter', colorChange);
headerElenent.addEventListener('mouseleave', colorChange);
function colorChange(event) {
    if(event.type === 'mouseenter'){
        footerElenent.style.backgroundColor = 'red';
    } else if(event.type === 'mouseleave') {
        footerElenent.style.backgroundColor = '';
    }
}

//-------------------------------------------------------------------------------------------
// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запускатись коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

// Відповідь:



const options = {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 1,
};

let intervalId;

const callback = ([entry]) => {
	const targetElement = entry.target;
	const counterElement = targetElement.querySelector('[data-max-value][data-interval-value]');

	if (!counterElement) return;

	const { maxValue = 0, intervalValue = 0 } = counterElement.dataset || {};

	if (entry.isIntersecting) {
		if (parseFloat(counterElement.textContent) >= maxValue) return;

		intervalId = setInterval(() => {
			counterElement.textContent = parseFloat(counterElement.textContent) + 1;

			if (parseFloat(counterElement.textContent) >= maxValue) clearInterval(intervalId);
		}, intervalValue);
	} else {
		clearInterval(intervalId);
	}
}

const observer = new IntersectionObserver(callback, options);

const target = document.querySelector('.item-text');

observer.observe(target);


