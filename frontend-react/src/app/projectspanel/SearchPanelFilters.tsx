'use client'

import { Button } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { numberCommonItems } from '../utilities/hooks';
import { LifecycleLookup } from '../models/Lifecycle';
import { ProjectTypeDict as ProjectTypeDict } from '../models/ProjectType';
import { PlatformTypeLookup } from '../models/PlatformType';
import { KeyValue } from '../models/KeyValue';

const SearchPanelFiltersWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const FilterColumn = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

const FilterColumnOptionTitle = styled.div<{ $isSelected: boolean }>`
    font-weight: ${p => p.$isSelected ? '600' : '400' };
    font-size: ${p => p.$isSelected ? '18' : '16' };
    color: ${p => p.theme.primary};
`;

const FilterColumnOptionCounter = styled.div<{ $isSelected: boolean }>`
    font-weight: ${p => p.$isSelected ? '400' : '300' };
    font-size: ${p => p.$isSelected ? '14' : '12' };
    color: ${p => p.theme.secondary};
`;

const FilterOptions = styled.ul`
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 4px;
`;

const FilterTypeOptions = styled.div<{ $isSelected: boolean }>`
    font-weight: 400;
    font-size: 14px;
    ${p => p.$isSelected ? 'font-style: italic;' : ''} 
`;

export enum SearchFilterType {
    Languages,
    ProjectType,
    PlatformType,
    ProjectLifeCycle
}

export interface SearchFilter {
    type: SearchFilterType,
    text: string,
    options: KeyValue[]
}

const SearchFilterOptions: SearchFilter[] = [
    { type: SearchFilterType.Languages, text: 'Languages', options: [{key: 0, value: 'C#'}] },
    { type: SearchFilterType.ProjectType, text: 'Project Type', options: ProjectTypeDict },
    { type: SearchFilterType.ProjectLifeCycle, text: 'Project State', options: ProjectTypeDict },
    { type: SearchFilterType.PlatformType, text: 'Platform type', options: PlatformTypeLookup }
];

export const SearchPanelFilters = ({
}: {
}) => {
    const [openFilterType, setOpenFilterType] = useState<SearchFilterType>(SearchFilterType.Languages);
    const [selectedFilters, setSelectedFilters] = useState<string[]>(['']);

    const handleSetSelectedFilters = (item: string) => {
        if (selectedFilters.includes(item)) {
            setSelectedFilters(selectedFilters.filter(f => f !== item));
        } else {
            setSelectedFilters([...selectedFilters, item]);
        }
    }

    const typeFilterCounter = (type: SearchFilterType) => {
        return numberCommonItems(SearchFilterOptions.find(fc => fc.type === type), selectedFilters);
    }

    return (
        <SearchPanelFiltersWrapper>
            <FilterColumn>
                {SearchFilterOptions.map(f => {
                    const isSelected = f.type === openFilterType;
                    const filterCount = 7; //typeFilterCounter(f.type);
                    return (
                        <Button onClick={() => setOpenFilterType(f.type)} key={f.type} style={{ height: '50px'}}>
                            <FilterColumnOptionTitle $isSelected={isSelected}>{f.text}</FilterColumnOptionTitle>
                            {f.type > 0 && <FilterColumnOptionCounter $isSelected={isSelected}>{f.type}</FilterColumnOptionCounter>}
                        </Button>
                    )
                })}
            </FilterColumn>

            <FilterOptions>
                {SearchFilterOptions.find(fc => fc.type === openFilterType)?.options.map(o => {
                    return (
                        <FilterTypeOptions
                            key={o.key}
                            onClick={() => handleSetSelectedFilters(o.value)}
                            $isSelected={selectedFilters.includes(o.value)}>
                            {o.value}
                        </FilterTypeOptions>
                    )
                })}
            </FilterOptions>
        </SearchPanelFiltersWrapper>
    )
}