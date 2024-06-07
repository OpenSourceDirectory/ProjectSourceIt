'use client'

import { Dispatch, createContext, useReducer, } from 'react';
import { DarkPallet, IPallet, LightPallet, ThemeType } from '../styles/ColorPallet';

export const ThemeContext = createContext<{
	theme: IPallet;
	dispatchTheme: Dispatch<ThemeType>;
}>({
	theme: LightPallet,
	dispatchTheme: () => null,
});

const palletReducer = (state: IPallet, type: ThemeType): IPallet => {
    switch (type) {
        case ThemeType.light:
            return LightPallet;
        default:
            return DarkPallet;
    }
};

// TODO. Use this isntead of what is copied on page.tsx
export const ThemeProvider = (props: any) => {
	const [theme, dispatchTheme] = useReducer(palletReducer, LightPallet);

	return (<ThemeContext.Provider value={{ theme, dispatchTheme }}>{props.children}</ThemeContext.Provider>)
}