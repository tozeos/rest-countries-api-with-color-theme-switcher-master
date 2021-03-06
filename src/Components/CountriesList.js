import styled from "styled-components";
import {colors} from "./variables";
import {useState} from "react";
import numeral from 'numeral'

export const CountriesList = (props) => {
    // Filter countries
    const [searchTerm, setSearchTerm] = useState()
    let search = props.search
    return (
        <>
            {props.data.filter((val) => {
                if(search === '') {
                    return val
                } else if (val.data.name.common.toLowerCase().includes(search.toLowerCase())){
                    return val
                }
            }).map((country, key) => (
                <Card key={key}>
                    <Flag src={country.flags.png} alt={`Flag of ${country.name.common}`}/>
                    <Info>
                        <h2>{country.name.common}</h2>
                        <p><span>Population: </span> {numeral(country.population).format('0,0')}</p>
                        <p><span>Region: </span> {country.region}</p>
                        <p><span>Capital: </span> {country.capital}</p>
                    </Info>
                </Card>
            ))}
        </>
    )
}


const Card = styled.div`
  width: 265px;
  border-radius: 5px;
  box-shadow: ${colors.boxShadow};
  background-color: ${({theme}) => theme.elements};
  cursor: pointer;

  span {
    font-weight: 600;
  }
`

const Flag = styled.img`
  background-size: cover;
  background-position: center;
  height: 160px;
  width: 100%;
  border-radius: 5px 5px 0 0;
`

const Info = styled.div`
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  gap: .2rem;

  h2 {
    padding-bottom: .6rem;
    font-size: 1.2rem;
  }

  p span {
    font-weight: 600;
  }
`