import React, {useEffect, useState} from "react";
import {Home} from './Components/Home'
import {Loading} from "./Components/Loading";

function App(props) {
    // API Request
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
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

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <Loading/>
    } else {
        return (
            <>
                <Home data={countries}/>
            </>
        )
    }
}

export default App;
