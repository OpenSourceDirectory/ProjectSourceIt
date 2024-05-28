import styled, { ThemeProvider } from 'styled-components';
import { Title } from './components/Title';
import { IPallet } from './styles/ColorPallet';
import { FocusAreaTypes, Navigation, NavigationItems } from './Navigation';
import ToggleButton from './components/ToggleButton';
import { useState } from 'react';
import { ProjectsPanelComponent } from './projectspanel/ProjectsPanelComponent';
import { Background, BackgroundHeight } from './components/Background';
import { FocusArea } from './FocusArea';

const PageLayoutWrapper = styled.div`
    height: 100%;
    width: 100%;
    background: ${props => props.theme.base};
    display: flex;
    flex-direction: column;
`;

const TopRow = styled.div`
    min-height: 150px;
    max-height: 250px;
    width: 98%;
    height: 10%;
    display: flex;
    flex-direction: row;
    margin: 12px;
`;

const BottomRowHeight = 90;
const BottomRow = styled.div`
    height: ${BottomRowHeight}%;
    display: flex;
    flex-direction: row;
    margin: 12px;
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


export const PageLayout = ({ 
    theme, toggleTheme
}:{ 
    theme: IPallet, toggleTheme: () => void
}) => {
    const [focusArea, setFocusArea] = useState<FocusAreaTypes>(FocusAreaTypes.About);

    return (
        <ThemeProvider theme={theme}>
            <PageLayoutWrapper>
                <Background theme={theme} />

                <TopRow>
                    <Column $widthPerc={70}>
                        <Title />
                    </Column>

                    <Column $widthPerc={30}>
                        <Navigation focusAreaDisplay={focusArea} setFocusAreaDisplay={setFocusArea} />
                    </Column>

                    <ToggleButton themeType={theme.type} toggleTheme={toggleTheme} />
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