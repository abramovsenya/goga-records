import React from 'react';
import './PersonalCard.css';
import './PersonalCard.js';

function PersonalCard(props) {
	const { img, title, subtitle, icon, experience } = props;
	return (
		<>
			<article className='person'>
				<img className='person__image' src={img} alt='person' />
				<div className='person__info'>
					<p className='person__name'>{title}</p>
					<p className='person__job'>{subtitle}</p>
					<img src={icon} alt='stars' />
					<p className='person__experience'>{experience}</p>
				</div>
			</article>
		</>
	);
}
export default PersonalCard;
