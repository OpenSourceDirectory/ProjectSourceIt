import { Lifecycle } from "./Lifecycle";
import { PlatformType } from "./PlatformType";
import { ProjectType } from "./ProjectType";

export interface Project {
    id: number,
    title: string,
    blurb: string,
    lifecycle: Lifecycle,
    type: ProjectType,
    platform: PlatformType | PlatformType[]
}

export const DummyProjectData: Project[] = [
    { 
        id: 1,
        title: 'Shooter Game',
        blurb: 'New amazing shooter to make!',
        lifecycle: Lifecycle.FeatureFlow,
        type: ProjectType.Game,
        platform: PlatformType.Xbox
    },
    { 
        id: 2,
        title: 'Todo App',
        blurb: '',
        lifecycle: Lifecycle.Idea,
        type: ProjectType.Web,
        platform: PlatformType.Fontend
    },
    { 
        id: 3,
        title: 'Mobile Suduko solver',
        blurb: 'Suduko solver, right on your finger tips!',
        lifecycle: Lifecycle.Initial,
        type: ProjectType.Mobile,
        platform: PlatformType.Native
    },
    { 
        id: 4,
        title: 'Photo editor',
        blurb: 'Imagine not sucking at taking photos? I cant, which is why we need to make this application!',
        lifecycle: Lifecycle.Maintenance,
        type: ProjectType.DesktopApp,
        platform: PlatformType.WPF
    },
    { 
        id: 5,
        title: 'New social media',
        blurb: 'Lets make more people miserable :)',
        lifecycle: Lifecycle.MVP,
        type: ProjectType.Web,
        platform: PlatformType.Fullstack
    }
]