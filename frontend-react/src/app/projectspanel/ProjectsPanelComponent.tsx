import { useState } from 'react';
import styled from 'styled-components';
import { ProjectsPanelSearch } from './ProjectsPanelSearch';
import { ProjectsPanelResults } from './ProjectsPanelResults';

const FeaturePanelComponentWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;


export const ProjectsPanelComponent = ({
    } : {
}) => {


    return (
        <FeaturePanelComponentWrapper>
            <ProjectsPanelSearch />

            <ProjectsPanelResults />
        </FeaturePanelComponentWrapper>
    )
}