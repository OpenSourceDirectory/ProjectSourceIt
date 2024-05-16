
export enum ThemeType {
	light = 0,
	dark
}

export interface IPallet {
    type: ThemeType,

    base: string,
    primary: string,
    secondary: string,
    accent: string,
}

export const LightPallet: IPallet = {
    type: ThemeType.light,

    base: "#E8EFEC",
    primary: "#343DEB",
    secondary: "#FC03D7",
    accent: "#EE004C"
};

export const DarkPallet: IPallet = {
    type: ThemeType.dark,

    base: "#001C35",
    primary: "#3E0085",
    secondary: "#00ABF7",
    accent: "#FF85DF"
};