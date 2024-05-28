import styled from "styled-components";
import { PageTitle } from "../components/PageTitle";
import { ProjectFlowDiagram } from "./ProjectFlowDiagram";


const AboutPageWrapper = styled.div`
`;

const TextBlockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
    margin-bottom: 24px;
`

const BaseText = styled.span`
    text-align: center;
    font-size: 18px;
    color: ${p => p.theme.primary};
`;

const BoldenText = styled(BaseText)`
    font-weight: 700;
    font-size: 20px;
    color: ${p => p.theme.secondary};
`;

export const AboutPage = () => {
    return (
        <AboutPageWrapper>
            <PageTitle text="About" />

            <TextBlockWrapper>
                <BaseText>
                    Open Source Directory is an initiative to allow greater 
                    <BoldenText>  collaboration  </BoldenText>
                    and
                    <BoldenText>  disclosure  </BoldenText>
                    within the open source community.
                </BaseText>

                <BaseText>
                    It's main aim is to enhance new project awareness,
                    generate attention to special repositories and
                    ensure a consistent growth to open source code bases.
                </BaseText>

                <BaseText>
                    This tool has
                    <BoldenText>  something for everyone  </BoldenText>
                    , from a new comer looking for a way to learn pragmatically,
                    to a seasoned pro waiting for the right next thing to sink their teeth into.
                </BaseText>

                <BaseText>
                    There is even something for the incapabile, who simply
                    have an idea which they want to create a team around.
                </BaseText>

                <BaseText>
                    Get started by either searching throughout the collection of @promoted@ projects
                    or by submitting your own project for others to ponder over.
                </BaseText>
            </TextBlockWrapper>

            <ProjectFlowDiagram />
        </AboutPageWrapper>
    )
}