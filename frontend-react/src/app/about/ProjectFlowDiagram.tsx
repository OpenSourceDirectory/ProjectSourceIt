import React, { useContext, useState } from 'react';  
import { Steps } from 'antd';
import styled, { ThemeContext } from 'styled-components';
import { LightBulb } from '../icons/LightBulb';
import { Plan } from '../icons/Plan';
import { Develop } from '../icons/Develop';
import { Flow } from '../icons/Flow';
import { Maintenance } from '../icons/Maintenance';
import { End } from '../icons/End';
import { Exit } from '../icons/Exit';
import './ProjectFlowDiagram.css'

const DiagramWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const IconWithDescriptionWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const IconWrapper = styled.div`
    &:hover {
        background: ${p => p.theme.hover};
    }
`;

const DescriptionTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    width: 100%;
`;

const DescriptionText = styled.span`
    font-size: 16px;
    text-align: left;
    width: 100%;
    display: inline-flex;
    vertical-align: baseline;
    align-items: center;
`;

const CloseDescriptionWrapper = styled.div`
`;

const IconWithDescription = ({
    icon,
    onClickHandle
} : {
    icon: React.ReactNode,
    onClickHandle: () => void
}) => {
    return (
        <IconWithDescriptionWrapper>
            <IconWrapper onClick={onClickHandle}>{icon}</IconWrapper>
        </IconWithDescriptionWrapper>
    )
}

export const ProjectFlowDiagram = () => {
	const theme = useContext(ThemeContext);
    const [stepDescriptionShowing, setStepDescriptionShowing] = useState<string>();
    
    const selectedStyle = { fontWeight: 800 };

    let description = '';
    switch (stepDescriptionShowing) {
        case 'Idea':
            description = 'Owner has an idea they wish to put forward with the intent of gaining traction towards building a team to complete the project.';
            break;
        case 'Initialise':
            description='Repo is created; Likely a project lead is determined. General idea of the tech stack.';
            break;
        case 'MVP':
            description='Working towards the first viable release of the project. A plan of what needs to be achieved for this first release is created.'
            break;
        case 'Feature Flow':
            description='Project has achieved at least one release and now is the stage to build from that by continuously adding new and dazzling improvements.';
            break;
        case 'Maintenance':
            description='Projects final form is completed. This stage grants the occasional updates, including new found bugs and minor improvements';
            break;
        case 'End Of Life':
            description='Project dead... Though might just need the right soul to breath some new life into it?';
            break;
    }

    return (
        <DiagramWrapper>
            <Steps
                style={{ color: theme?.primary, marginTop: '12px' }}
                items={[
                {
                    title: 'Idea',
                    status: 'finish',
                    style:  stepDescriptionShowing === 'Idea' ? selectedStyle : undefined,
                    icon: <IconWithDescription
                                icon={<LightBulb />}
                                onClickHandle={() => setStepDescriptionShowing('Idea')} />,
                },
                {
                    title: 'Initialise',
                    status: 'finish',
                    style:  stepDescriptionShowing === 'Initialise' ? selectedStyle : undefined,
                    icon: <IconWithDescription
                                icon={<Plan />}
                                onClickHandle={() => setStepDescriptionShowing('Initialise')}
                                 />,
                },
                {
                    title: 'MVP',
                    status: 'finish',
                    style:  stepDescriptionShowing === 'MVP' ? selectedStyle : undefined,
                    icon: <IconWithDescription
                                icon={<Develop />}
                                onClickHandle={() => setStepDescriptionShowing('MVP')} />,
                },
                {
                    title: 'Feature Flow',
                    status: 'finish',
                    style:  stepDescriptionShowing === 'Feature Flow' ? selectedStyle : undefined,
                    icon: <IconWithDescription
                                icon={<Flow />}
                                onClickHandle={() => setStepDescriptionShowing('Feature Flow')}/>,
                },
                {
                    title: 'Maintenance',
                    status: 'finish',
                    style:  stepDescriptionShowing === 'Maintenance' ? selectedStyle : undefined,
                    icon: <IconWithDescription
                                icon={<Maintenance />}
                                onClickHandle={() => setStepDescriptionShowing('Maintenance')} />
                },
                {
                    title: 'End Of Life',
                    status: 'finish',
                    style:  stepDescriptionShowing === 'End Of Life' ? selectedStyle : undefined,
                    icon: <IconWithDescription
                                icon={<End />}
                                onClickHandle={() => setStepDescriptionShowing('End Of Life')} />
                }
                ]}
            />
            {stepDescriptionShowing &&
            <DescriptionTextWrapper>
                <CloseDescriptionWrapper onClick={() => setStepDescriptionShowing(undefined)}><Exit /></CloseDescriptionWrapper>
                <DescriptionText>{description}</DescriptionText>
            </DescriptionTextWrapper>}
        </DiagramWrapper>
    );
}