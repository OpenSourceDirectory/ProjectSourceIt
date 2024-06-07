'use client'

import { useState } from "react";
import { IPalletColors } from "../styles/ColorPallet";
import { Button, Dropdown, MenuProps } from "antd";
import { SketchPicker } from 'react-color';

export const PalletSelector = ({pallet, setPallet} : {pallet: IPalletColors, setPallet: (value: IPalletColors) => void}) => {

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
