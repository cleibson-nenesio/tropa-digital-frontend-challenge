import { Components, Icon } from "@mui/material";
import styled from "styled-components";
import LoginBg from "../../assets/images/space-login-bg.png";

type Props = {
  component: unknown;
};

export const LoginContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  position: relative;
  width: 857px;
  height: 511px;
  border-radius: 4px;

  @media (max-width: 860px){
    max-width: 480px;
    margin: 20px;
  }

  > img {
   @media (max-width: 860px) {
    display: none;
   } 
  }
`;

export const ImageLogin = styled.img`
  position: absolute;
  bottom: 0;
  right: 49px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 468px;

  h2 {
    font-size: 0;
    margin-bottom: 44px;
    align-self: center;
  }

  form {
    display: flex;
    flex-direction: column;
    color: #8f8f8f;
    padding: 44px 60px;

    h3 {
      font-size: 25px;
      margin-bottom: 20px;

      span {
        color: #ff6c22;
        opacity: 1;
      }
    }

    input {
      font-size: 15px;
      padding: 13px;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      font-family: "Advent Pro", sans-serif;
      margin-bottom: 13px;

      @media (max-width: 860px) {
        font-size: 17px;
      }
    }
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  position: relative;

  input {
    width: 100%;
  }
`;

export const TogglePassword = styled(Icon)<Props>`
  position: absolute;
  right: 13px;
  top: 10px;
  cursor: pointer;
`;
