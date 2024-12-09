const sliderName = new Swiper('.swiperClass', {
	navigation: {
		prevEl: '.btn_1',
		nextEl: '.btn_2',
	},
	pagination: {
		el: '.pagination_1',
		clickable: true,
	},
	mousewheel: true,
	keyboard: true,
});
