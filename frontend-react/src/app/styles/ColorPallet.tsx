
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
    cardBorder: string
}

export interface IPallet extends IPalletColors {
    type: ThemeType,
}

export const LightPallet: IPallet = {
    type: ThemeType.light,

    base: "#F4F4F6",
    hover: "#E5E5E9",
    primary: "#480C69",
    secondary: "#5C0932",
    accent: "#45095A",
    cardBorder: "#DDBD8E"
};

export const DarkPallet: IPallet = {
    type: ThemeType.dark,

    base: "#001C35",
    hover: "#073359",
    primary: "#3E0085",
    secondary: "#00ABF7",
    accent: "#FF85DF",
    cardBorder: "#DDBD8E"
};