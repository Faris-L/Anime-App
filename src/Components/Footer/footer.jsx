import logo from "../../assets/animelogo.png";

import { FooterContainer,NavLinks,StyledNavLink,Copyright,Brand,Logo,Tittle,Devide,ExternalLink} from "./footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
    <Devide>

       <Brand>
       <Logo src={logo} alt="Logo Picture"/>
       <Tittle>AnimeApp</Tittle>
       </Brand> 

      <NavLinks>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/anime">Anime</StyledNavLink>
        <StyledNavLink to="/manga">Manga</StyledNavLink>
        <StyledNavLink to="/about">About Us</StyledNavLink>
      </NavLinks>

    </Devide>
      <Copyright>© 2022   <ExternalLink href="https://flowbite.com/" target="_blank" rel="noopener noreferrer">Flowbite™</ExternalLink>. All Rights Reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
