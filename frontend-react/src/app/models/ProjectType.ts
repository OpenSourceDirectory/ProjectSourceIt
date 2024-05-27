import { KeyValue } from "./KeyValue";

export enum ProjectType {
    Web = 0,
    Mobile,
    Engine,
    Game,
    AI,
    DesktopApp
}

export const ProjectTypeDict: KeyValue[] = [
    { key: ProjectType.Web, value: 'Web' },
    { key: ProjectType.Mobile, value: 'Mobile' },
    { key: ProjectType.Engine, value: 'Engine' },
    { key: ProjectType.Game, value: 'Game' },
    { key: ProjectType.AI, value: 'AI' },
    { key: ProjectType.DesktopApp, value: 'Desktop Application' }
]