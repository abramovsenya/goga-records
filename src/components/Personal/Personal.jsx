import React from 'react';
import { CardItem } from '../../ui/PersonalCard/PersonalCard.js'; // Импортируем массив данных
import PersonalCard from '../../ui/PersonalCard/PersonalCard.jsx';
import './Personal.css';

function Personal() {
	return (
		<>
			<div className='personal'>
				<div className='personal__content container'>
					<h2 className='personal__title'>
						Наш персонал с радостью поможет вам созданием ваших шедевров
					</h2>
					<div className='personal__team'>
						{/* Отображаем карточки на основе данных из массива CardItem */}
						{CardItem.map(person => (
							<PersonalCard
								key={person.id}
								img={person.img}
								title={person.title}
								subtitle={person.subtitle}
								icon={person.icon}
								experience={person.experience}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Personal;
