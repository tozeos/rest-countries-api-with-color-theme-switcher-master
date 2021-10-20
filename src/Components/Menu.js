import styled from "styled-components";
import {colors, breakpoints} from "./variables";

export const Header = styled.header`
  background-color: ${({theme}) => theme.elements};
  color: ${({theme}) => theme.text};
  height: 4.375rem;
  display: flex;
  align-items: center;
  padding: 0 4.375rem;
  justify-content: space-between;
  box-shadow: ${colors.boxShadow};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 30px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
}
`

export const Title = styled.h1`
  font-weight: 800;
  font-size: 1.5rem;
  user-select: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.250rem;
  }
`