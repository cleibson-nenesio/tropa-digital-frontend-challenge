import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import TropaLogo from "../../assets/images/tropa-logo.png";
import NotebookLogin from "../../assets/images/notebook-login-bg.png";
import SpaceLoginBg from "../../assets/images/space-login-bg.png";
import {
  ImageLogin,
  LoginContainerWrapper,
  LoginWrapper,
  PasswordContainer,
  TogglePassword,
} from "./LoginContainer.styles";
import { Button } from "../../styles/Button";
import { useState } from "react";

const LoginContainer = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <LoginContainerWrapper>
      <LoginWrapper>
        <h2>
          <img src={TropaLogo} alt="Tropa Digital" />
          Tropa Digital Login
        </h2>

        <form>
          <h3>
            Bem Vindo ao <span>painel</span>
          </h3>

          <input type="text" name="email" placeholder="Digite seu e-mail" />
          <PasswordContainer>
            <input
              type={isVisible ? "text" : "password"}
              name="password"
              placeholder="Digite sua senha"
              autoComplete="off"
            />
            <TogglePassword
              component={
                isVisible ? VisibilityOutlinedIcon : VisibilityOffOutlinedIcon
              }
              onClick={() => setIsVisible(!isVisible)}
            />
          </PasswordContainer>
          <Button to="/home" isActive={false}>Acessar</Button>
        </form>
      </LoginWrapper>
      <ImageLogin src={NotebookLogin} alt="person typing on a notebook" />
      <img src={SpaceLoginBg} alt="space" />
    </LoginContainerWrapper>
  );
};

export default LoginContainer;
