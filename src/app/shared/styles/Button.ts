import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  isActive?: boolean
}

export const Button = styled(Link)<Props>`
  font-size: 14px;
  line-height: 26.11px;
  padding: 8px 2px;
  max-width: 150px;
  background-color: ${(props) => props.isActive ? '#FFFFFF' : '#2EAFB2'};
  color: ${(props) => props.isActive ? '#000000' : '#FFFFFF'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  text-align: center;

  svg {
    color: ${(props) => props.isActive ? '#FF6C22' : '#FFFFFF'};
  }

  &:active {
    opacity: 0.7;
  }
`;
