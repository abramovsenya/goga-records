import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ReviewsPage from './Pages/ReviewsPage';
import StudiosPage from './Pages/StudiosPage';

// import React from 'react';

import './styles/App.css';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/studios' element={<StudiosPage />} />
					<Route path='/reviews' element={<ReviewsPage />} />
					<Route path='/login' element={<LoginPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
