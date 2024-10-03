import React, { useEffect } from 'react';
import SwiperLib from 'swiper'; // Импортируем основную библиотеку Swiper
import 'swiper/css'; // Основные стили Swiper
import 'swiper/css/navigation'; // Стили для навигации
import './Swiper.css'; // Ваши стили
import studioFirst from '/src/images/studioFirst.png';

function Swiper() {
	useEffect(() => {
		const swiper = new SwiperLib('.mySwiper', {
			spaceBetween: 30,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			mousewheel: true,
			keyboard: {
				enabled: true,
			},
		});

		// Проверяем, срабатывают ли события
		const nextButton = document.querySelector('.swiper-button-next');
		const prevButton = document.querySelector('.swiper-button-prev');

		if (nextButton) {
			nextButton.addEventListener('click', () => {
				console.log('Next button clicked');
				swiper.slideNext(); // Программно переходим на следующий слайд
			});
		}

		if (prevButton) {
			prevButton.addEventListener('click', () => {
				console.log('Prev button clicked');
				swiper.slidePrev(); // Программно переходим на предыдущий слайд
			});
		}

		return () => {
			// Удаляем обработчики событий при размонтировании компонента
			if (nextButton) nextButton.removeEventListener('click', () => {});
			if (prevButton) prevButton.removeEventListener('click', () => {});
		};
	}, []);

	return (
		<>
			<div className='swiper mySwiper'>
				<div className='swiper-wrapper'>
					<div className='swiper-slide'>
						<img src={studioFirst} alt='Slide 1' />
					</div>
					<div className='swiper-slide'>
						<img src={studioFirst} alt='Slide 1' />
					</div>
					<div className='swiper-slide'>
						<img src={studioFirst} alt='Slide 1' />
					</div>
				</div>
				<div className='swiper-button-next'></div>
				<div className='swiper-button-prev'></div>
			</div>
		</>
	);
}

export default Swiper;
