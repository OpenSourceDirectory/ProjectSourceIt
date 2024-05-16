import styled from 'styled-components';
import { ThemeType } from './styles/ColorPallet';
import ToggleButton from './components/ToggleButton';

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
    themeType,
    toggleTheme,
    // focusAreaDisplay,
    // setFocusAreaDisplay
}:{
    themeType: ThemeType,
    toggleTheme: () => void,
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

            <ToggleButton themeType={themeType} toggleTheme={toggleTheme} />
        </NavigationWrapper>
    )
}