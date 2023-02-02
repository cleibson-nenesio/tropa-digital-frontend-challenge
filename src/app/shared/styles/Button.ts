import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  font-size: 14px;
  line-height: 26.11px;
  padding: 8px 2px;
  max-width: 150px;
  background-color: #2EAFB2;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  text-align: center;

  &:active {
    opacity: 0.7;
  }
`;
