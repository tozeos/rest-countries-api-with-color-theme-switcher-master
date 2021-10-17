import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    background-color: orangered;
  }
`