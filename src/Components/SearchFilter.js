import styled from "styled-components";
import {colors, breakpoints} from "./variables";

export const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 4.375rem 50px 4.375rem 80px;
  background-color: ${({theme}) => theme.background};
  box-shadow: ${colors.insetShadow};
  gap: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 50px 30px;
  }

  input {
    font-size: 14px;

    width: 470px;
    height: 55px;
    padding: 0 50px;

    border: none;
    border-radius: 5px;
    box-shadow: ${colors.boxShadow};

    background: url('${({theme}) => theme.searchIcon}') no-repeat 20px;
    background-color: ${({theme}) => theme.elements};
    background-size: 18px;
    color: ${({theme}) => theme.text};

    &::placeholder {
      color: ${({theme}) => theme.text};
      opacity: 1;
    }

    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }
`

export const Select = styled.select`
  background-color: ${({theme}) => theme.elements};
  width: 200px;
  padding: 0 25px;
  height: 56px;
  border-radius: 5px;
  border: none;
  color: ${({theme}) => theme.text};
  box-shadow: ${colors.boxShadow};
}
`
