import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  active?: string | undefined
}

export const Button = styled(Link)<Props>`
  font-size: 14px;
  line-height: 26.11px;
  padding: 8px 2px;
  max-width: 150px;
  background-color: ${(props) => props.active ? '#FFFFFF' : '#2EAFB2'};
  color: ${(props) => props.active ? '#000000' : '#FFFFFF'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  text-align: center;

  svg {
    color: ${(props) => props.active ? '#FF6C22' : '#FFFFFF'};
  }

  &:active {
    opacity: 0.7;
  }
`;
