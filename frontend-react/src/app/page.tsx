'use client'

import Navigation from "./Navigation";
import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import './App.css';
import ToggleBtn from './components/ToggleButton';

export default function App() {
	const [{ themeName }] = useContext(ThemeContext);
	console.log('themeName in App', themeName);
	return (
		<div className={`${themeName} app`}>
			<div className="card">
				<Navigation />
				<div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
					<ToggleBtn />
				</div>
				<h1>Toggle Theme App</h1>
				<h4>Dark Mode is {themeName === 'dark' ? 'On' : 'Off'}</h4>
			</div>
    	</div>
	);
}
