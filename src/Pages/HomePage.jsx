import React from 'react';
import Swiper from '../ui/Swiper/Swiper';

function HomePage() {
	return (
		<>
			<div className='hero'>
				<div className='hero__content container'>
					<h1>Добро пожаловать на платформу Goga Records</h1>
					<p>
						Мы предоставляем амбициозным музыкантам наши студии звукозаписи для
						создания революционных треков со всем оборудованием и классным
						персоналом который поможет вдохнуть жизнь в ваши строки
					</p>
					<Swiper />
				</div>
			</div>
		</>
	);
}
export default HomePage;
