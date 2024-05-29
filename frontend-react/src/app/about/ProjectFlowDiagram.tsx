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

const DiagramWrapper = styled.div`

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

const DescriptionText = styled.span`
    font-size: 16px;
    width: 150px;
`;

const CloseDescriptionWrapper = styled.div`
    position: absolute:
    right: 0;
    top: 0;
`;

const IconWithDescription = ({
    icon,
    description,
    showDescription,
    onClickHandle,
    hideOnClickHandle
} : {
    icon: React.ReactNode,
    description: string,
    showDescription: boolean,
    onClickHandle: () => void,
    hideOnClickHandle: () => void
}) => {
    return (
        <IconWithDescriptionWrapper>
            <IconWrapper onClick={onClickHandle}>{icon}</IconWrapper>
            {showDescription && <DescriptionText>{description}</DescriptionText>}
            {showDescription && <CloseDescriptionWrapper onClick={hideOnClickHandle}><Exit /></CloseDescriptionWrapper>}
        </IconWithDescriptionWrapper>
    )
}

export const ProjectFlowDiagram = () => {
	const theme = useContext(ThemeContext);
    const [stepDescriptionShowing, setStepDescriptionShowing] = useState<string>();

    return (
        <DiagramWrapper>
            <Steps
                style={{ color: theme?.primary, marginTop: '12px' }}
                items={[
                {
                    title: 'Idea',
                    status: 'finish',
                    icon: <IconWithDescription
                                icon={<LightBulb />}
                                onClickHandle={() => setStepDescriptionShowing('Idea')}
                                description='Owner has an idea they wish to put forward with the intent of gaining traction towards building a team to complete the project.'
                                showDescription={stepDescriptionShowing === 'Idea'}
                                hideOnClickHandle={() => setStepDescriptionShowing(undefined)} />,
                },
                {
                    title: 'Initialise',
                    status: 'finish',
                    icon: <IconWithDescription
                                icon={<Plan />}
                                onClickHandle={() => setStepDescriptionShowing('Initialise')}
                                description='Repo is created; Likely a project lead is determined. General idea of the tech stack.'
                                showDescription={stepDescriptionShowing === 'Idea'}
                                hideOnClickHandle={() => setStepDescriptionShowing(undefined)} />,
                },
                {
                    title: 'MVP',
                    status: 'finish',
                    icon: <IconWithDescription
                                icon={<Develop />}
                                onClickHandle={() => setStepDescriptionShowing('MVP')}
                                description='Working towards the first viable release of the project. A plan of what needs to be achieved for this first release is created.'
                                showDescription={stepDescriptionShowing === 'Idea'}
                                hideOnClickHandle={() => setStepDescriptionShowing(undefined)} />,
                },
                {
                    title: 'Feature Flow',
                    status: 'finish',
                    icon: <IconWithDescription
                                icon={<Flow />}
                                onClickHandle={() => setStepDescriptionShowing('Feature Flow')}
                                description='Project has achieved at least one release and now is the stage to build from that by continuously adding new and dazzling improvements.'
                                showDescription={stepDescriptionShowing === 'Idea'}
                                hideOnClickHandle={() => setStepDescriptionShowing(undefined)} />,
                },
                {
                    title: 'Maintenance',
                    status: 'finish',
                    icon: <IconWithDescription
                                icon={<Maintenance />}
                                onClickHandle={() => setStepDescriptionShowing('Maintenance')}
                                description='Projects final form is completed. This stage grants the occasional updates, including new found bugs and minor improvements'
                                showDescription={stepDescriptionShowing === 'Maintenance'}
                                hideOnClickHandle={() => setStepDescriptionShowing(undefined)} />
                },
                {
                    title: 'End Of Life',
                    status: 'finish',
                    icon: <IconWithDescription
                                icon={<End />}
                                onClickHandle={() => setStepDescriptionShowing('End Of Life')}
                                description='Project dead... Though might just need the right soul to breath some new life into it?'
                                showDescription={stepDescriptionShowing === 'End Of Life'}
                                hideOnClickHandle={() => setStepDescriptionShowing(undefined)} />
                }
                ]}
            />
        </DiagramWrapper>
    );
}