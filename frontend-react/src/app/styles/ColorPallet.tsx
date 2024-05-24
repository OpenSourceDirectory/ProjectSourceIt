
export enum ThemeType {
	light = 0,
	dark
}

export interface IPalletColors {
    base: string,
    hover: string,
    primary: string,
    secondary: string,
    accent: string,
}

export interface IPallet extends IPalletColors {
    type: ThemeType,
}

export const LightPallet: IPallet = {
    type: ThemeType.light,

    base: "#E8EFEC",
    hover: "#CED9D4",
    primary: "#343DEB",
    secondary: "#FC03D7",
    accent: "#EE004C"
};

export const DarkPallet: IPallet = {
    type: ThemeType.dark,

    base: "#001C35",
    hover: "#073359",
    primary: "#3E0085",
    secondary: "#00ABF7",
    accent: "#FF85DF"
};