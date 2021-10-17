import React from "react";
import styled from "styled-components";
import { colors, breakpoints } from "./variables";

export const SearchFilter = () => {
    const Container = styled.div`
      padding: 0 4.375rem;
      background-color: ${({ theme }) => theme.background};
      box-shadow: ${colors.insetShadow};

      @media (max-width: 375px) {
        padding: 0 30px;
      }

      input {
        font-size: 14px;

        width: 470px;
        height: 55px;
        padding: 0 50px;
        margin-top: 50px;
        margin-bottom: 80px;

        border: none;
        border-radius: 5px;
        box-shadow: ${colors.boxShadow};

        background: url('${({ theme }) => theme.searchIcon}') no-repeat 20px;
        background-color: ${({ theme }) => theme.elements};
        background-size: 18px;
        color: ${({ theme }) => theme.text};
        
        &::placeholder {
          color: ${({ theme }) => theme.text};
          opacity: 1;
        }

        @media (max-width: ${breakpoints.mobile}) {
          width: 100%;
        }
      }
    `
    return (
        <Container>
            <input type="text" placeholder={'Search for a country...'}/>
        </Container>
    )

}
