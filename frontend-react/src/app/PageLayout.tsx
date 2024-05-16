import styled, { ThemeProvider } from 'styled-components';
import { Title } from './components/Title';
import { IPallet } from './styles/ColorPallet';
import { Navigation } from './Navigation';

const PageLayoutWrapper = styled.div`
    height: 100%;
    width: 100%;
    background: ${props => props.theme.base};
    display: flex;
    flex-direction: row;
`;

const TopRow = styled.div`
    min-height: 250px;
    max-height: 300px;
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
`;

const BottomRow = styled.div`
    height: 80%;
    display: flex;
    flex-direction: row;
`;

const TitleColumn = styled.div`
    width: 70%;
`;

const NavigationColumn = styled.div`
    width: 30%;
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
                    <TitleColumn>
                        <Title />
                    </TitleColumn>

                    <NavigationColumn>
                        <Navigation themeType={theme.type} toggleTheme={toggleTheme} />
                    </NavigationColumn>
                </TopRow>

                <BottomRow>


                </BottomRow>

            </PageLayoutWrapper>
        </ThemeProvider>
    )
}