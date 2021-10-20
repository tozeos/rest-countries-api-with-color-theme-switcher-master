import React, {useState} from "react";
import {ThemeProvider} from "styled-components";
import {useDarkMode} from "./Components/useDarkMode";
import {lightTheme, darkTheme} from "./Components/Themes";
import {GlobalStyles} from "./Components/globalStyles";
import {Container, Content} from "./Components/Container";
import Toggle from "./Components/Toggler";
import {Header, Title} from "./Components/Menu";
import {CountriesList} from "./Components/CountriesList";
import {Select, SearchFilterContainer} from "./Components/SearchFilter";

const HomePage = () => {
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme
    const [searchText, setSearchText] = useState("");
    const [keys, setKeys] = React.useState([]);

    // Watch the key press
    function handleKeyPress(e) {
        const {key} = e;
        setKeys([...keys, key]);

        if (key === 'Enter') {
            console.log(searchText)
        }
    }

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles/>
            <Container>
                <Header>
                    <a href={'/'}><Title>Where in the world?</Title></a>
                    <Toggle theme={theme} toggleTheme={themeToggler}/>
                </Header>
                <SearchFilterContainer>
                    <input type="text"
                           placeholder={'Search for a country...'}
                           value={searchText}
                           onChange={(event) => setSearchText(event.target.value)}
                           onKeyPress={handleKeyPress}
                           autoFocus={true}
                    />
                    <Select name={'regions'}>
                        <option value={''}>Filter by region</option>
                        <option value={'africa'}>Africa</option>
                        <option value={'america'}>America</option>
                        <option value={'asia'}>Asia</option>
                        <option value={'europe'}>Europe</option>
                        <option value={'oceania'}>Oceania</option>
                    </Select>
                    {/** <button onClick={handleSearch} type={'button'}>Vai</button> **/}
                </SearchFilterContainer>
                <Content>
                    <CountriesList/>
                </Content>
            </Container>
        </ThemeProvider>
    );
}

function App() {
    return (
        <>
            <HomePage/>
        </>
    )
}

export default App;
