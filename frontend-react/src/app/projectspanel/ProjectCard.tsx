import { useState } from 'react';
import styled from 'styled-components';
import { Project } from '../models/project';

const Card = styled.div`
    box-sizing: border-box;
    border: 2px solid ${p => p.theme.cardBorder};
    border-radius: 4px;
    background-color:  ${p => p.theme.base};
    height: fit-content;
    width: 100%;
    padding: 8px;

    display: flex;
    flex-direction: column;
    gap: 8px;
    
    &:hover {
        background: ${p => p.theme.hover};
    }
`;

const CardTitle = styled.div`
    font-size: 18px;
    color: ${p => p.theme.primary};
    font-weight: 600;
    text-align: center;
`;

const CardBlurb = styled.div`
    font-size: 14px;
    color: ${p => p.theme.secondary};
    font-weight: 400;
`;

export const ProjectCard = ({
    data
}: {
    data: Project
}) => {

    return (
        <Card>
            <CardTitle>{data.title}</CardTitle>
            <CardBlurb>{data.blurb}</CardBlurb>
        </Card>
    )
}