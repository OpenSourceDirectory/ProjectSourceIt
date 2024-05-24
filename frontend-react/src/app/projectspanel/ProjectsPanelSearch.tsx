import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Flipper, Flipped } from 'react-flip-toolkit'
import useClickOutside, { useOutsideAlerter } from '../utilities/hooks';

const SearchWrapper = styled.div<{ $isExpanded: boolean }>`
    border: 2px solid ${p => p.theme.secondary};
    width: ${p => p.$isExpanded ? '80%' : '300px'};
    height: ${p => p.$isExpanded ? '300px' : 'fit-content'};
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    padding: 8px;
    gap: 12px;
    
    &:hover {
        background: ${p => p.theme.hover};
    }
`;

const SearchCircle = styled.div`
    border: 2px solid ${p => p.theme.secondary};
    width: 20px;
    height: 20px;
    border-radius: 20px;
`;

const SearchText = styled.span`
    color: ${p => p.theme.primary};
    height: 20px;
    border-bottom: 1px solid ${p => p.theme.accent};
`;

export const ProjectsPanelSearch = ({
}: {
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const componentRef = useRef(null);

    useClickOutside(componentRef, () => {
        setIsExpanded(false);
    });

    return (
        <Flipper flipKey={isExpanded}>
            <Flipped flipId="expand">
                <SearchWrapper ref={componentRef} $isExpanded={isExpanded} onClick={() => setIsExpanded(true)}>
                    <SearchCircle />
                    <SearchText>{'projects search'}</SearchText>
                </SearchWrapper>
            </Flipped>
        </Flipper>
    )
}