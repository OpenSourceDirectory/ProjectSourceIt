import styled from 'styled-components';

const NavigationWrapper = styled.div`
    height: 100%;
    width: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    padding: 12px;
`;

const NavigationList = styled.div`
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
                {options.map(o => {
                    return (<div>
                        {o}
                    </div>)
                })}
            </NavigationList>
        </NavigationWrapper>
    )
}