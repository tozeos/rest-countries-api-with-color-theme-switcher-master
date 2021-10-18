import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./Components/useDarkMode";
import { lightTheme, darkTheme } from "./Components/Themes";
import { GlobalStyles } from "./Components/globalStyles";
import { Container, Content } from "./Components/Container";
import { SearchFilter } from "./Components/Search-filter";
import Toggle from "./Components/Toggler";
import { Header, Title } from "./Components/Menu";
import { CountriesList } from "./Components/CountriesList";


function App() {
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
      <ThemeProvider theme={themeMode}>
          <GlobalStyles/>
            <Container>
                <Header>
                    <a href={'/'}><Title>Where in the world?</Title></a>
                    <Toggle theme={theme} toggleTheme={themeToggler}/>
                </Header>
                <SearchFilter/>
                <Content>
                    <CountriesList/>
                </Content>
            </Container>
          </ThemeProvider>
  );
}

export default App;
