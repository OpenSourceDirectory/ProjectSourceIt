import { createContext, useState } from 'react';
import { DarkPallet, IPallet, IPalletColors, LightPallet, ThemeType } from '../styles/ColorPallet';


export const ThemeContext = createContext(LightPallet);

// TODO. Use this isntead of what is copied on page.tsx
export const ThemeProvider = (props: any) => {
	const [theme, setTheme] = useState<IPallet>(LightPallet);
    
	function handleToggleTheme() {
		setTheme(prevTheme => prevTheme.type === ThemeType.dark ? LightPallet : DarkPallet);
	}

	function handleSetTheme(value: IPalletColors) {
		setTheme({
			...value,
			type: theme.type
		})
	}

	return (<ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>)
}