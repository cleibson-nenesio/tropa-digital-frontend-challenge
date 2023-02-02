import TropaLogo from "../../assets/images/tropa-logo.png";
import { Button } from "../../styles/Button";
import { Logo, Menu, SideMenuWrapper } from "./SideMenu.styles";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const SideMenu = () => {
  return (
    <SideMenuWrapper>
      <Logo>
        <h1>Tropa Digital</h1>
        <img src={TropaLogo} alt="Tropa Digital Logo" />
      </Logo>

      <Menu>
        <ul>
          <li>
            <Button to="/home" isActive={true}>
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
