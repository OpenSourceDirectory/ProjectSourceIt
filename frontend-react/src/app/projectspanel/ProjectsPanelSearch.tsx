import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Flipper, Flipped } from 'react-flip-toolkit'
import { useClickOutside } from '../utilities/hooks';
import { SearchPanelFilters } from './SearchPanelFilters';
import { Input } from 'antd';

const SearchWrapper = styled.div<{ $isExpanded: boolean }>`
    border: 2px solid ${p => p.theme.secondary};
    width: ${p => p.$isExpanded ? '80%' : '300px'};
    height: ${p => p.$isExpanded ? '300px' : 'fit-content'};
    border-radius: 8px;
    margin: 8px 20px;

    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 12px;
    
    &:hover {
        background: ${p => p.theme.hover};
    }
`;

const TopRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const SearchCircle = styled.div`
    border: 2px solid ${p => p.theme.secondary};
    width: 20px;
    height: 20px;
    border-radius: 20px;
`;

export const ProjectsPanelSearch = ({
}: {
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>();
    const componentRef = useRef(null);

    useClickOutside(componentRef, () => {
        setIsExpanded(false);
    });

    return (
        <Flipper flipKey={isExpanded}>
            <Flipped flipId="expand">
                <SearchWrapper ref={componentRef} $isExpanded={isExpanded} onClick={() => setIsExpanded(true)}>
                    <TopRow>
                        <SearchCircle />
                        <Input value={searchText} placeholder='Project keyword search' onChange={(e) => setSearchText(e.currentTarget.value)} />
                    </TopRow>

                    {isExpanded && <SearchPanelFilters />}
                </SearchWrapper>
            </Flipped>
        </Flipper>
    )
}