import { useContext } from "react";

import {
  PopupMenu,
  SectionContainer,
  NavLinks,
  LinkButton,
  StyledLink,
  ListItem,
} from "./styles";
import { navLinks } from "../../features/Constants";
import { PopupContext } from "../../features/Context";
import SearchInput from "../../features/Search";

const NavPopup = () => {
  const { isOpenPopup, setOpenPopup } = useContext(PopupContext);
  return (
    <SectionContainer
      onClick={(e) =>
        isOpenPopup &&
        !e.target.classList.contains("search-input") &&
        !e.target.classList.contains("btn-search")
          ? setOpenPopup(false)
          : null
      }
    >
      <NavLinks>
        {navLinks.map(({ id, title, path, isButton }) => {
          return (
            <ListItem key={id}>
              {isButton === true ? (
                <LinkButton
                  onClick={(e) => (isOpenPopup ? null : setOpenPopup(true))}
                >
                  {title}
                </LinkButton>
              ) : (
                <StyledLink to={path} onClick={() => setOpenPopup(false)}>
                  {title}
                </StyledLink>
              )}
            </ListItem>
          );
        })}
      </NavLinks>
      <PopupMenu></PopupMenu>
    </SectionContainer>
  );
};

export default NavPopup;
