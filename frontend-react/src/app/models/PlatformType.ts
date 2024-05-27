import { KeyValue } from "./KeyValue";

export enum PlatformType {
    Backend,
    Fontend,
    Fullstack,
    Application,
    Native,
    Xbox,
    WPF,
    Mac,
    Engine,
    Framework,
    Library
}

export const PlatformTypeLookup: KeyValue[] = [
    { key: PlatformType.Backend, value: 'Backend' },
    { key: PlatformType.Fontend, value: 'Frontend' },
    { key: PlatformType.Fullstack, value: 'Fullstack' },
    { key: PlatformType.Application, value: 'Application' },
    { key: PlatformType.Native, value: 'Native' },
    { key: PlatformType.WPF, value: 'WPF' },
    { key: PlatformType.Mac, value: 'Mac' },
    { key: PlatformType.Engine, value: 'Engine' },
    { key: PlatformType.Framework, value: 'Framework' },
    { key: PlatformType.Library, value: 'Library' },

]