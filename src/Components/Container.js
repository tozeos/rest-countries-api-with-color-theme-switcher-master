import styled from "styled-components";
import {breakpoints} from "./variables";

export const Container = styled.div`
  height: 100vh;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.background};
  }
`

export const Content = styled.div`
  padding: 0 4.375rem 4.375rem;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-evenly;


  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 30px;
    flex-direction: column;
    align-items: center;
  }
`