/*----------filter----------*/
const filters = document.querySelectorAll('.filter');

filters.forEach(filter => { 

  filter.addEventListener('click', function() {

    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.catalog .catalog__item:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.catalog [data-filter='${selectedFilter}']`);

    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.catalog [data-filter]');
    }

    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
    });

    itemsToShow.forEach(el => {
      el.classList.remove('hide');
      el.classList.add('show'); 
    });

  });
});
/*----------filter----------*/


/*----------calc price----------*/
function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.shopping__cart__wrapper');
	const priceElements = cartWrapper.querySelectorAll('.shopping__cart__price');
	const totalPriceEl = document.querySelector('.total__price');

	let priceTotal = 0;

	priceElements.forEach(function (item) {
		const amountEl = item.closest('.shopping__cart__inner').querySelector('[data-counter]');
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});

	totalPriceEl.innerText = priceTotal;
}
/*----------calc price----------*/


/*----------counter----------*/
window.addEventListener('click', function (event) {
		calcCartPriceAndDelivery();
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		const counterWrapper = event.target.closest('.counter__wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
	}

	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	if (event.target.dataset.action === 'minus') {

		if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
		} else if (event.target.closest('.shopping__cart__wrapper') && parseInt(counter.innerText) === 1) {
			event.target.closest('.shopping__cart__inner').remove();

			calcCartPriceAndDelivery();
			toggleCartStatus();
		}
	}

	if (event.target.hasAttribute('data-action') && event.target.closest('.shopping__cart__wrapper')) {
		calcCartPriceAndDelivery();
	}
});
/*----------counter----------*/


/*----------add to shopping card----------*/
const cartWrapper =  document.querySelector('.shopping__cart__wrapper');

window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {

		const card = event.target.closest('.catalog__item');

		const productInfo = {
			id: card.dataset.id,
			imgSrcWeb: card.querySelector('.product__media__img').getAttribute('src'),
			imgSrc: card.querySelector('.product__media__img').getAttribute('srcset'),
			title: card.querySelector('.product__title').innerText,
			price: card.querySelector('.product__price').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};

		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
			const cartItemHTML = `<div data-id="${productInfo.id}" class="shopping__cart__inner">
								<div class="shopping__cart__media">
									<img src="${productInfo.imgSrc}" alt="">
									<picture>
										<source srcset="${productInfo.imgSrcWeb}" type="image/webp">
										<img src="${productInfo.imgSrc}" alt="">
									</picture>
								</div>
								<div class="shopping__cart__info">
									<p class="shopping__cart__info__title">${productInfo.title}</p>
									<div class="counter__wrapper shopping__cart__counter">
										<div class="control__item" data-action="plus">+</div>
										<div class="control__current" data-counter>${productInfo.counter}</div>
										<div class="control__item" data-action="minus">-</div>
									</div>
									<div class="shopping__cart__footer">
										<p class="shopping__cart__price">${productInfo.price}</p>
									</div>
								</div>
							</div>`;

			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		}

		card.querySelector('[data-counter]').innerText = '1';

		toggleCartStatus();

		calcCartPriceAndDelivery();
	}
});
/*----------add to shopping card----------*/


/*----------parallax----------*/
let bg = document.querySelector('.intro_media');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 50 + 'px)';
});
/*----------parallax----------*/



/*----------icon----------*/
(function(){ 
  document.onreadystatechange = () => {

    if (document.readyState === 'complete') {
      let el = document.querySelector('#bottle');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":8,"strokeOpacity":1,"strokeColor":"#222F3D","strokeCap":"square"}); 
      myAnimation.paint(); 
    }
  }
})();
/*----------icon----------*/
