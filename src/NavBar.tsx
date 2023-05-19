import { useState } from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarLogo,
  TogglesButton,
  NavbarLinks,
  NavbarLink,
} from "./styles";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLogo>Trello</NavbarLogo>
        <TogglesButton onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </TogglesButton>
        <NavbarLinks isOpen={isOpen}>
          <NavbarLink>
            <a href="#">Home</a>
          </NavbarLink>
          <NavbarLink>
            <a href="#">Boards</a>
          </NavbarLink>
          <NavbarLink>
            <a href="#">Team</a>
          </NavbarLink>
        </NavbarLinks>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default NavBar;
