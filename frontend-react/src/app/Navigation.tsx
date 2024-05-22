import styled from 'styled-components';

const NavigationWrapper = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NavigationList = styled.ul`
    padding: 10px;
    border: 1px solid #EE004C;
    border-radius: 50px;
    width: 60%;
    text-align: center;
`;

const NavigationItem = styled.div`
    font-weight: 600;
    font-size: 22px;
    padding: 2px 5px;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    cursor: pointer;
    color: ${p => p.theme.primary};

    &:hover {
        background: ${p => p.theme.hover};
    }
`;

export enum FocusAreaTypes {
    About,
    Login,
    Account,
    FeatureProjects,
    WatchedProjects
}

export const Navigation = ({
    // focusAreaDisplay,
    // setFocusAreaDisplay
}:{
    // focusAreaDisplay: FocusAreaTypes;
    // setFocusAreaDisplay: (type: FocusAreaTypes) => void;
}) => {
    const options = Object.values(FocusAreaTypes).filter((t: any) => typeof t === 'string' || t instanceof String);

    return (
        <NavigationWrapper>
            <NavigationList>
                {options.map(o => <NavigationItem>{o}</NavigationItem>)}
            </NavigationList>
        </NavigationWrapper>
    )
}