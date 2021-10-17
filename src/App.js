import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./Components/useDarkMode";
import { lightTheme, darkTheme } from "./Components/Themes";
import { GlobalStyles } from "./Components/globalStyles";
import { Container } from "./Components/Container";
import { SearchFilter } from "./Components/Search-filter";
import Toggle from "./Components/Toggler";
import {Header, Title} from "./Components/Menu";

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
              <h1>Vou pegar bolo.</h1>
            </Container>
          </ThemeProvider>
  );
}

export default App;
