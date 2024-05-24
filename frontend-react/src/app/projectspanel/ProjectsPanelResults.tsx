import { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border: 2px solid ${p => p.theme.secondary};
    border-radius: 4px;
    background-color:  ${p => p.theme.base};
    height: 50px;
    width: 100%;
`


export const ProjectsPanelResults = ({
}: {
}) => {


    return (
        <div>
        <div>{"These are the results you're after"}</div>
        <Card>{'First project'}</Card>
        </div>
    )
}