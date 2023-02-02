import { Icon } from "@mui/material";
import styled from "styled-components";

type Props = {
  component: unknown;
};

export const LoginContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin: 0 auto;
  background-color: #ffffff;
  position: relative;
  width: 857px;
  height: 511px;
  border-radius: 4px;
  box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.25);

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
  width: 468px;

  h2 {
    font-size: 0;
    padding: 70px 84px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    color: #8F8F8F;
    padding: 44px 60px;

    h3 {
      font-size: 25px;
      margin-bottom: 20px;
      line-height: 46px;

      span {
        color: #ff6c22;
        opacity: 1;
        font-size: 29px;
      }
    }

    input {
      font-size: 15px;
      padding: 13px;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      font-family: "Advent Pro", sans-serif;
      margin-bottom: 13px;
      max-width: 313px;

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
  right: 47px;
  top: 10px;
  cursor: pointer;
`;
