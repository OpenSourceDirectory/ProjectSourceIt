'use client'

import Navigation from "./Navigation";
import { createContext, useState } from 'react';
import './App.css';
import ToggleBtn from './components/ToggleButton';
import { RouteHandler } from "./Routing";

export const ThemeContext = createContext('light');

export default function App() {
	const [theme, setTheme] = useState('light');
	
	return (
		<ThemeContext.Provider value={theme}>
			<RouteHandler />
		</ThemeContext.Provider>
	);
}
