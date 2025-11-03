import { useDisclosure } from "@mantine/hooks";
import { Bar, Brand, LogoBox, LogoImg, Burger } from "./navbar.styled";
import logo from "../../assets/animelogo.png";
import { NavLink } from "react-router-dom";

export default function Navbar({ onMenuClick }) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Bar>
      <Burger
        size={20.5}
        opened={opened}
        onClick={() => { toggle(); onMenuClick?.(); }} 
        aria-label="Toggle navigation"          
      />
      <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <LogoBox>
          <LogoImg src={logo} alt="AnimeApp Logo" />
          <Brand>AnimeApp dwkmdjanwdja</Brand>
        </LogoBox>
      </NavLink>
    </Bar>
  );
}