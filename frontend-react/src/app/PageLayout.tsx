'use client' // TODO stift where the state logic is

import styled, { ThemeProvider } from 'styled-components';
import { Title } from './components/Title';
import { IPallet, ThemeType } from './styles/ColorPallet';
import { FocusAreaTypes, Navigation, NavigationItems } from './Navigation';
import ToggleButton from './components/ToggleButton';
import { useContext, useState } from 'react';
import { ProjectsPanelComponent } from './projectspanel/ProjectsPanelComponent';
import { Background, BackgroundHeight } from './components/Background';
import { FocusArea } from './FocusArea';
import { AuthContext } from './providers/AuthProvider';
import { Login } from './components/Login';
import { Account } from './components/Account';
import { ThemeContext } from './providers/ThemeProvider';

const PageLayoutWrapper = styled.div`
    height: 100%;
    width: 100%;
    background: ${props => props.theme.base};
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const TopRow = styled(Row)`
    min-height: 150px;
    max-height: 250px;
    width: 98%;
    height: 10%;
    margin: 12px;
`;

const BottomRowHeight = 90;
const BottomRow = styled(Row)`
    height: ${BottomRowHeight}%;
    display: flex;
`;

// Height reduction is so nothing overlaps with the Background component.
const HeightReduction = 100 - ((90 / 100) * BackgroundHeight);
const Column = styled.div<{ $widthPerc: Number, $heightReduction?: boolean }>`
    width: ${p => p.$widthPerc.toString()}%;
    margin: 0px 12px;
    ${p => p.$heightReduction ? `height: ${HeightReduction}%;` : ''}
`;

const Separator = styled.div`
    background-color: ${p => p.theme.secondary};
    width: 8px;
    borderRadius: 4px;
`;


export const PageLayout = () => {
    const { state, dispatch } = useContext(AuthContext);
    const { theme, dispatchTheme } = useContext(ThemeContext);
    const [focusArea, setFocusArea] = useState<FocusAreaTypes>(FocusAreaTypes.About);

    return (
        <ThemeProvider theme={theme}>
            <PageLayoutWrapper>
                <Background theme={theme} />

                <TopRow>
                    <Column $widthPerc={65}>
                        <Title />
                    </Column>

                    <Column $widthPerc={30}>
                        <Navigation focusAreaDisplay={focusArea} setFocusAreaDisplay={setFocusArea} />
                    </Column>
                    
                    <Column $widthPerc={15} style={{ marginLeft: 'auto' }}>
                        <Row>
                            {!state.isLoggedIn ?
                                <Login />
                            :
                                <Account />
                            }

                            <div style={{ marginLeft: 'auto'}}>
                                <ToggleButton themeType={theme.type} toggleTheme={() => dispatchTheme(theme.type === ThemeType.dark ? ThemeType.light : ThemeType.dark)} />
                            </div>
                        </Row>
                    </Column>
                </TopRow>

                <BottomRow>
                    <Column $widthPerc={35} $heightReduction>
                        <ProjectsPanelComponent />
                    </Column>
                    
                    <Separator />

                    <Column $widthPerc={65} $heightReduction>
                        <FocusArea displayPage={focusArea} />
                    </Column>

                </BottomRow>

            </PageLayoutWrapper>
        </ThemeProvider>
    )
}