import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '/src/images/logo.svg';

function Header() {
	return (
		<header className='header'>
			<nav className='nav'>
				<Link to='/'>
					<img className='logo' src={logo} alt='Логотип' />
				</Link>
				<ul className='header__menu'>
					<li className='header__menu-item'>
						<Link to='/studios' className='header__menu-link'>
							Студии
						</Link>
					</li>
					<li className='header__menu-item'>
						<Link to='/reviews' className='header__menu-link'>
							Отзывы
						</Link>
					</li>
					<li className='header__menu-item'>
						<Link to='/login' className='header__menu-link'>
							Войти
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
