import styled from "styled-components";

export const Loading = () => {
    return(
        <LoadIcon>
            Loading...
        </LoadIcon>
    )
}

const LoadIcon = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0, 0%, 100%); // Mudar isso aqui depois
  background-color: hsl(207, 26%, 17%); // Mudar isso aqui depois
`