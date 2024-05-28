import React, { useContext } from 'react';  
import { Steps } from 'antd';
import styled, { ThemeContext } from 'styled-components';
import { LightBulb } from '../icons/LightBulb';
import { Plan } from '../icons/Plan';
import { Develop } from '../icons/Develop';
import { Flow } from '../icons/Flow';
import { Maintenance } from '../icons/Maintenance';
import { End } from '../icons/End';

const DiagramWrapper = styled.div`

`;

export const ProjectFlowDiagram = () => {
	const theme = useContext(ThemeContext);
    return (
        <DiagramWrapper>
            <Steps
                style={{ color: theme?.primary }}
                items={[
                {
                    title: 'Idea',
                    status: 'finish',
                    icon: <LightBulb />,
                },
                {
                    title: 'Initialise',
                    status: 'finish',
                    icon: <Plan />,
                },
                {
                    title: 'MVP',
                    status: 'finish',
                    icon: <Develop />,
                },
                {
                    title: 'Feature Flow',
                    status: 'finish',
                    icon: <Flow />,
                },
                {
                    title: 'Maintenance',
                    status: 'finish',
                    icon: <Maintenance />,
                },
                {
                    title: 'End Of Life',
                    status: 'finish',
                    icon: <End />,
                }
                ]}
            />
        </DiagramWrapper>
    );
}