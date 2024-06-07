import { useState } from 'react';
import styled from 'styled-components';
import { ProjectCard } from './ProjectCard';
import { DummyProjectData } from '../models/Project';

const ProjectsPanelResultsWrapper = styled.div`
    gap: 8px;
    display: flex;
    flex-direction: column;

    overflow-y: auto;
`;


export const ProjectsPanelResults = ({
}: {
}) => {

    return (
        <ProjectsPanelResultsWrapper>
            {DummyProjectData.map(p => {
                return <ProjectCard key={p.id} data={p} />
            })}
        </ProjectsPanelResultsWrapper>
    )
}