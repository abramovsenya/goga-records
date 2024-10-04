import React from 'react';
import './Hero.css';
import Swiper from '/src/ui/Swiper/Swiper';
function Hero() {
	return (
		<>
			<div className='hero'>
				<div className='hero__content container'>
					<div className='hero__description'>
						<h1 className='hero__title'>
							Добро пожаловать на платформу Goga Records
						</h1>
						<p className='hero__subtitle'>
							Мы предоставляем амбициозным музыкантам наши студии звукозаписи
							для создания революционных треков со всем оборудованием и классным
							персоналом который поможет вдохнуть жизнь в ваши строки
						</p>
					</div>
					<Swiper />
				</div>
			</div>
		</>
	);
}

export default Hero;
