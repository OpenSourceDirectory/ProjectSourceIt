import styled, { ThemeProvider } from 'styled-components';
import { ThemeOption } from './page';
import { Title } from './components/Title';
import { IPallet } from './styles/ColorPallet';

const PageLayoutWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const TopRow = styled.div`
    min-height: 300px;
    max-height: 500px;
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
`;

const BottomRow = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
`;

const TitleColumn = styled.div`
    width: 60%;
    min-width: 500px;
`;

const NavigationColumn = styled.div`
    width: 40%;
    min-width: 200px;
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
                        {/* <Navigation theme={theme} /> */}
                    </NavigationColumn>
                </TopRow>

                <BottomRow>


                </BottomRow>

            </PageLayoutWrapper>
        </ThemeProvider>
    )
}