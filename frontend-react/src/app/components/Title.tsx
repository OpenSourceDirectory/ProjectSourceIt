import styled, { ThemeProvider } from 'styled-components';

const TitleWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 12px;
`;

const TitleText = styled.div`
    height: 65%;
    width: 100%;

    color: ${props => props.theme.primary};
    font-size: 80px;
    font-weight: 800;
`;

const Squiggle = styled.div`
    min-height: 35px;
    max-height: 45px;
    height: 40px;
    width: 100%;

    background: ${props => props.theme.secondary};
    margin: 0px 12px;
`;

export const Title = () => {
    return (
        <TitleWrapper>
            <TitleText>Open Source Directory</TitleText>
            <Squiggle />
        </TitleWrapper>
    )
}