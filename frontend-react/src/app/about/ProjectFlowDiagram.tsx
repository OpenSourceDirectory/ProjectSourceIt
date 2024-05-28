import React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import styled from 'styled-components';

const DiagramWrapper = styled.div`

`;

export const ProjectFlowDiagram = () => {
    return (
        <DiagramWrapper>
            <Steps
                items={[
                {
                    title: 'Idea',
                    status: 'finish',
                    icon: <UserOutlined />,
                },
                {
                    title: 'Initialise',
                    status: 'finish',
                    icon: <SolutionOutlined />,
                },
                {
                    title: 'MVP',
                    status: 'finish',
                    icon: <LoadingOutlined />,
                },
                {
                    title: 'Feature Flow',
                    status: 'finish',
                    icon: <LoadingOutlined />,
                },
                {
                    title: 'Maintenance',
                    status: 'finish',
                    icon: <SmileOutlined />,
                },
                {
                    title: 'End Of Life',
                    status: 'finish',
                    icon: <LoadingOutlined />,
                },
                ]}
            />
        </DiagramWrapper>
    );
}