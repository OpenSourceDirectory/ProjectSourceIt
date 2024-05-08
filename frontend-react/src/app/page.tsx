'use client'

import Navigation from "./Navigation";
import { createContext, useState } from 'react';
import './App.css';
import ToggleBtn from './components/ToggleButton';

export const ThemeContext = createContext('light');

export default function App() {
	const [theme, setTheme] = useState('light');
	
	return (
		<ThemeContext.Provider value={theme}>
			<div className={`${theme} app`}>
				<div className="card">
					<Navigation />
					<div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
						<ToggleBtn themeName={theme} toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
					</div>
					<h1>Toggle Theme App</h1>
					<h4>Dark Mode is {theme === 'dark' ? 'On' : 'Off'}</h4>
				</div>
			</div>
		</ThemeContext.Provider>
	);
}
