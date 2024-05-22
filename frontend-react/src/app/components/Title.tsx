import styled from 'styled-components';

const TitleWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const TitleText = styled.div`
    height: 65%;
    width: 100%;

    color: ${p => p.theme.primary};
    font-size: 80px;
    font-weight: 800;
    display: block;
`;

const Squiggle = styled.div`
    min-height: 30px;
    max-height: 40px;
    height: 35px;
    width: 100%;

    background: ${p => p.theme.secondary};
    margin: 12px 0px;
`;

export const Title = () => {
    return (
        <TitleWrapper>
            <TitleText>Open Source Directory</TitleText>
            <Squiggle />
        </TitleWrapper>
    )
}