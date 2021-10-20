import React from "react";
import {func, string} from 'prop-types';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-solid-svg-icons";

const Toggler = styled.span`
  cursor: pointer;
  font-weight: 600;
  user-select: none;

  img {
    width: 15px;
  }
`

const Toggle = ({theme, toggleTheme}) => {
    return (
        <Toggler onClick={toggleTheme}>
            <FontAwesomeIcon icon={faMoon}/> Dark Mode
        </Toggler>
    )
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
