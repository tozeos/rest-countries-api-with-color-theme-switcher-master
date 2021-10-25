import styled from "styled-components";
import {colors} from "./variables";

export const CountriesList = (props) => {
    return (
        <>
            {props.data.map((country, index) => (
                <Card key={index}>
                    <Flag src={country.flags.png} alt={`Flag of ${country.name.common}`}/>
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