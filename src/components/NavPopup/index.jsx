import { useContext, useEffect, useState } from "react";

import {
  PopupMenu,
  SectionContainer,
  NavLinks,
  LinkButton,
  StyledLink,
  ListItem,
  PopupLinks,
  PopupNavLinks,
} from "./styles";
import { navLinks } from "../../features/Constants";
import {
  PopupContext,
  LoginContext,
  ProductsContext,
} from "../../features/Context";
import { infoPathes } from "../../features/Constants";
import SearchInput from "../../features/Search";
import CartSection from "../../features/CartSection";
import { notifySuccses } from "../../helpers/notify";

const NavPopup = () => {
  const [content, setContent] = useState(null);
  const { user, setUser } = useContext(LoginContext);
  const { brands } = useContext(ProductsContext);
  const {
    isOpenPopup,
    setOpenPopup,
    clickedLink,
    setClickedLink,
    setShowingNav,
    isShowingNav,
  } = useContext(PopupContext);

  useEffect(() => {
    updateContent();
    // eslint-disable-next-line
  }, [clickedLink]);

  const updateContent = () => {
    if (clickedLink === "Brands") {
      setContent(brands);
    } else if (clickedLink === "Information") {
      setContent(infoPathes);
    } else {
      setContent(null);
    }
    setShowingNav(true);
  };

  const onClosePopup = (e) => {
    if (
      (isOpenPopup && e.target.classList.contains("popup")) ||
      (isOpenPopup && e.target.classList.contains("styled-link"))
    ) {
      setOpenPopup(false);
      setClickedLink(null);
    }
  };

  const onSignOut = () => {
    setUser({});
    setOpenPopup(false);
    setClickedLink(null);
    localStorage.removeItem("token");
    notifySuccses("You succsessfully sign out");
  };

  return (
    <SectionContainer className="popup" onClick={(e) => onClosePopup(e)}>
      {isShowingNav ? (
        <NavLinks>
          {navLinks.map(({ id, title, path, isButton }) => {
            return (
              <ListItem key={id}>
                {isButton === true ? (
                  <LinkButton
                    className="link-button"
                    onClick={(e) =>
                      isOpenPopup
                        ? setClickedLink(e.target.textContent)
                        : setOpenPopup(true)
                    }
                  >
                    {title}
                  </LinkButton>
                ) : (
                  <StyledLink
                    className="styled-link"
                    to={path}
                    onClick={(e) => (
                      setOpenPopup(false), setClickedLink(e.target.textContent)
                    )}
                  >
                    {title}
                  </StyledLink>
                )}
              </ListItem>
            );
          })}
          {user.email !== undefined ? (
            <>
              <ListItem>
                <StyledLink className="styled-link" to="/admin">
                  Admin Panel
                </StyledLink>
              </ListItem>
              <ListItem>
                <LinkButton onClick={() => onSignOut()}>Sign out</LinkButton>
              </ListItem>
            </>
          ) : null}
        </NavLinks>
      ) : null}
      {content !== null ? (
        <PopupMenu className="popup-menu">
          <PopupNavLinks>
            {content.map(({ path, title }, i) => {
              return (
                <PopupLinks key={i} to={path} className="styled-link">
                  {title}
                </PopupLinks>
              );
            })}
          </PopupNavLinks>
        </PopupMenu>
      ) : content === null && clickedLink === "Cart" ? (
        <PopupMenu>
          <CartSection />
        </PopupMenu>
      ) : (
        <SearchInput setShowingNav={setShowingNav} />
      )}
    </SectionContainer>
  );
};

export default NavPopup;
