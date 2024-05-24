import { useState } from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
    border: 2px solid ${p => p.theme.secondary};
    width: 300px;
    height: fit-content;
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    padding: 8px;
    gap: 12px;
`;

const SearchCircle = styled.div`
    border: 2px solid ${p => p.theme.secondary};
    width: 20px;
    height: 20px;
    border-radius: 20px;
`;

const SearchText = styled.span`
    color: ${p => p.theme.primary};
`;

export const ProjectsPanelSearch = ({
}: {
}) => {


    return (
        <SearchWrapper>
            <SearchCircle />
            <SearchText>{'projects search'}</SearchText>
        </SearchWrapper>
    )
}