import {useDarkMode} from "./useDarkMode";
import {darkTheme, lightTheme} from "./Themes";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./globalStyles";
import {Container, Content} from "./Container";
import {Header, Title} from "./Menu";
import Toggle from "./Toggler";
import React, {useEffect, useState} from "react";

// Under construction
const Country = (countryName) => {
    {
        // API Request
        const [error, setError] = useState(null)
        const [isLoaded, setIsLoaded] = useState(false)
        const [countries, setCountries] = useState([])

        useEffect(() => {
            fetch(`https://restcountries.com/v3.1/name/${countryName}`)
                .then(res => res.json())
                .then((result) => {
                        setIsLoaded(true)
                        setCountries(result)
                    },
                    (error) => {
                        setIsLoaded(true)
                        setError(error)
                    }
                )
        }, [])

        if(error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div> // personalizar essa bosta aqui. formatar população para o formato 00,000.000
        } else {
            return(

                <>
                    {countries.map((country, index) => (
                        <Card key={index}>
                            <Flag src={country.flags.png}/>
                            <Info>
                                <h2>{country.name.common}</h2>
                                <p><span>Population: </span> {country.population}</p>
                                <p><span>Region: </span> {country.region}</p>
                                <p><span>Capital: </span> {country.capital}</p>
                            </Info>
                        </Card>
                    ))}
                </>
            )
        }
    }
}

export const CountryPage = () => {
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
                    // Componente de país aqui :D
                </Content>
            </Container>
        </ThemeProvider>
    )
}