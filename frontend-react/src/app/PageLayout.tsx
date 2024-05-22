import styled, { ThemeProvider } from 'styled-components';
import { Title } from './components/Title';
import { IPallet } from './styles/ColorPallet';
import { Navigation } from './Navigation';
import ToggleButton from './components/ToggleButton';

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

const BottomRow = styled.div`
    height: 90%;
    display: flex;
    flex-direction: row;
    margin: 12px;
`;

const Column = styled.div<{ $widthPerc: Number }>`
    width: ${p => p.$widthPerc.toString()}%;
    margin: 0px 12px;
`;


export const PageLayout = ({ 
    theme, toggleTheme
}:{ 
    theme: IPallet, toggleTheme: () => void
}) => {
    return (
        <ThemeProvider theme={theme}>
            <PageLayoutWrapper>
                    <TopRow>
                        <Column $widthPerc={70}>
                            <Title />
                        </Column>

                        <Column $widthPerc={30}>
                            <Navigation />
                        </Column>

                        <ToggleButton themeType={theme.type} toggleTheme={toggleTheme} />
                    </TopRow>

                    <BottomRow>
                        <Column $widthPerc={35}>
                            {'Feature Projects'}
                        </Column>
                        
                        <div style={{ backgroundColor: theme.secondary, width: '8px', borderRadius: '4px' }} />

                        <Column $widthPerc={65}>
                            {'Focus area'}
                        </Column>

                    </BottomRow>

            </PageLayoutWrapper>
        </ThemeProvider>
    )
}