import { Button } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { numberCommonItems } from '../utilities/hooks';

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
    ProjectState
}

export interface SearchFilter {
    type: SearchFilterType,
    text: string
}

const SearchFilterArray: SearchFilter[] = [
    { type: SearchFilterType.Languages, text: 'Languages' },
    { type: SearchFilterType.ProjectType, text: 'Project Type' },
    { type: SearchFilterType.ProjectState, text: 'Project State' }
];


export interface FilterChoice {
    type: SearchFilterType,
    options: string[]
}

const FilterChoices: FilterChoice[] = [
    { type: SearchFilterType.Languages, options: ['C#', 'Python', 'Javascript', 'GO'] },
    { type: SearchFilterType.ProjectType, options: ['Web application', 'Mobile application', 'Mobile game', 'Indi game', 'Engine'] },
    { type: SearchFilterType.ProjectState, options: ['Idea', 'Initial', 'MVP', 'Feature Flow', 'Maintenance', 'End of life'] }
]

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
        return numberCommonItems(FilterChoices.find(fc => fc.type === type), selectedFilters);
    }

    return (
        <SearchPanelFiltersWrapper>
            <FilterColumn>
                {SearchFilterArray.map(f => {
                    const isSelected = f.type === openFilterType;
                    const filterCount = typeFilterCounter(f.type);
                    return (
                        <Button onClick={() => setOpenFilterType(f.type)}>
                            <FilterColumnOptionTitle $isSelected={isSelected}>{f.text}</FilterColumnOptionTitle>
                            {filterCount > 0 && <FilterColumnOptionCounter $isSelected={isSelected}>{f.text}</FilterColumnOptionCounter>}
                        </Button>
                    )
                })}
            </FilterColumn>

            <FilterOptions>
                {FilterChoices.find(fc => fc.type === openFilterType)?.options.map(o => {
                    return (
                        <FilterTypeOptions
                            onClick={() => handleSetSelectedFilters(o)}
                            $isSelected={selectedFilters.includes(o)}>
                            {o}
                        </FilterTypeOptions>
                    )
                })}
            </FilterOptions>
        </SearchPanelFiltersWrapper>
    )
}