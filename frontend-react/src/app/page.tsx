'use client'

import { createContext, useState } from 'react';
import './App.css';
import { PageLayout } from './PageLayout';
import { DarkPallet, IPallet, LightPallet, ThemeType } from './styles/ColorPallet';

export const ThemeContext = createContext(LightPallet);

// TODO get default theme from browser and apply that one.
export default function App() {
	const [theme, setTheme] = useState<IPallet>(LightPallet);

	function handleToggleTheme() {
		setTheme(prevTheme => prevTheme.type === ThemeType.dark ? LightPallet : DarkPallet);
	}
	
	return (
		<ThemeContext.Provider value={theme}>
			<PageLayout theme={theme} toggleTheme={handleToggleTheme} />
		</ThemeContext.Provider>
	);
}
