import styled from 'styled-components';

const TitleText = styled.div`
    color: ${p => p.theme.primary};
    font-size: 40px;
    font-weight: 700;
    display: block;
`;

export const PageTitle = ({text}: {text: string}) => {
    return <TitleText>{text}</TitleText>;
}