import TropaLogo from "../../assets/images/tropa-logo.png";
import { Button } from "../../styles/Button";
import { Logo, Menu, SideMenuWrapper } from "./SideMenu.styles";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { useState } from "react";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <SideMenuWrapper isOpen={isOpen} onClick={handleMenu}>
      <Logo isOpen={isOpen}>
        <h1>Tropa Digital</h1>
        <img src={TropaLogo} alt="Tropa Digital Logo" />
      </Logo>

      <Menu isOpen={isOpen}>
        <ul>
          <li>
            <Button to="/home" active="true">
              <SignalCellularAltRoundedIcon />
              Início
            </Button>
          </li>

          <li>
            <Button to="/home">
              <DescriptionOutlinedIcon />
              Contatos
            </Button>
          </li>

          <li>
            <Button to="/home">
              <TrendingUpRoundedIcon />
              Relatórios
            </Button>
          </li>

          <li>
            <Button to="/home">
              <DescriptionOutlinedIcon />
              Contatos
            </Button>
          </li>

          <li>
            <Button to="/home">
              <DescriptionOutlinedIcon />
              Contatos
            </Button>
          </li>

          <li>
            <Button to="/home">
              <DescriptionOutlinedIcon />
              Contatos
            </Button>
          </li>
        </ul>
      </Menu>
    </SideMenuWrapper>
  );
};

export default SideMenu;
