'use client'

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

import { createContext, useState } from 'react';
import { PageLayout } from './PageLayout';
import { DarkPallet, IPallet, IPalletColors, LightPallet, ThemeType } from './styles/ColorPallet';
import { SketchPicker } from 'react-color';
import { Button, Dropdown, MenuProps } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import { AuthProvider } from './providers/AuthProvider';

export const ThemeContext = createContext(LightPallet);

// TODO get default theme from browser and apply that one.
export default function App() {
	const [theme, setTheme] = useState<IPallet>(LightPallet);
	

	console.log('env', process.env.REACT_APP_CLIENT_ID);

	function handleToggleTheme() {
		setTheme(prevTheme => prevTheme.type === ThemeType.dark ? LightPallet : DarkPallet);
	}

	function handleSetTheme(value: IPalletColors) {
		setTheme({
			...value,
			type: theme.type
		})
	}
	
	return (
		<ThemeContext.Provider value={theme}>
			<AuthProvider>
				<Router>
					<Routes>
						<Route path="/login" element={<Login />}/>
						<Route path="/" element={<Home />}/>
					</Routes>
				</Router>
				<PageLayout theme={theme} toggleTheme={handleToggleTheme} />
				{/* <PalletSelector pallet={theme} setPallet={handleSetTheme} /> */}
			</AuthProvider>
		</ThemeContext.Provider>
	);
}



const PalletSelector = ({pallet, setPallet} : {pallet: IPalletColors, setPallet: (value: IPalletColors) => void}) => {

	const [palletProp, setPalletProp] = useState<string>('base');

	const items: MenuProps['items'] = [
		{
		  key: '1',
		  label: <div onClick={() => setPalletProp('base')}>base</div>,
		},
		{
		  key: '2',
		  label: <div onClick={() => setPalletProp('hover')}>hover</div>,
		},
		{
		  key: '3',
		  label: <div onClick={() => setPalletProp('primary')}>primary</div>,
		},
		{
		  key: '4',
		  label: <div onClick={() => setPalletProp('secondary')}>secondary</div>,
		},
		{
		  key: '5',
		  label: <div onClick={() => setPalletProp('accent')}>accent</div>,
		}
	];

	const handleChange = (color: any) => {
		let newPallet = { ...pallet };
		newPallet[palletProp as keyof IPalletColors] = color.hex as string;
		setPallet(newPallet);
	};

	return (
		<div style={{bottom: '0px', left: '0px', position: 'absolute'}}>
			<SketchPicker
				color={pallet[palletProp as keyof IPalletColors]}
				onChange={handleChange} />
			<Dropdown  menu={{ items }}>
				<Button>{palletProp}</Button>
			</Dropdown>
		</div>
	)
}
