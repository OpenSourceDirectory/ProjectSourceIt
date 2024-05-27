import { KeyValue } from "./KeyValue";

export enum Lifecycle {
    Idea = 0,
    Initial,
    MVP,
    FeatureFlow,
    Maintenance,
    EndOfLife
}

export const LifecycleLookup: KeyValue[] = [
    { key: Lifecycle.Idea, value: 'Idea' },
    { key: Lifecycle.Initial, value: 'Initial' },
    { key: Lifecycle.MVP, value: 'MVP' },
    { key: Lifecycle.FeatureFlow, value: 'Feature Flow' },
    { key: Lifecycle.Maintenance, value: 'Maintenance' },
    { key: Lifecycle.EndOfLife, value: 'End of life' }
]