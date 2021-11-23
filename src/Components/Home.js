import {useDarkMode} from "./useDarkMode";
import {darkTheme, lightTheme} from "./Themes";
import React, {useState} from "react";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./globalStyles";
import {Container, Content} from "./Container";
import {Header, Title} from "./Menu";
import Toggle from "./Toggler";
import {SearchFilterContainer, Select} from "./SearchFilter";
import {CountryComponent} from "./Country";
import {CountriesList} from "./CountriesList";

export const Home = (props) => {
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme
    const [searchText, setSearchText] = useState("");
    const [keys, setKeys] = React.useState([]);
    const [option, setOption] = useState("");
    const countries = props.data;

    // Watch the key press -- Filter by region
/*    function handleKeyPress(e) {
        const {key} = e;
        setKeys([...keys, key]);

        if (key === 'Enter') {
            console.log(searchText)
        }
        return true
    }*/

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
                           // onKeyPress={handleKeyPress}
                           autoFocus={true}
                    />
                    <Select name={'regions'} onChange={(event) => setOption(event.target.value)}>
                        <option value={''}>Filter by region</option>
                        <option value={'africa'}>Africa</option>
                        <option value={'america'}>America</option>
                        <option value={'asia'}>Asia</option>
                        <option value={'europe'}>Europe</option>
                        <option value={'oceania'}>Oceania</option>
                    </Select>
                </SearchFilterContainer>
                <Content>
                    {(searchText !== '' ? <CountryComponent country={countries} searchValue={searchText}/> :
                        <CountriesList data={countries} search={searchText}/>)}
                </Content>
            </Container>
        </ThemeProvider>
    );
}