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
import { PopupContext } from "../../features/Context";
import { brandPathes, infoPathes } from "../../features/Constants";
import SearchInput from "../../features/Search";
import CartSection from "../../features/CartSection";

const NavPopup = () => {
  const [content, setContent] = useState(null);
  const [isShowingNav, setShowingNav] = useState(true);

  const { isOpenPopup, setOpenPopup, clickedLink, setClickedLink } =
    useContext(PopupContext);

  useEffect(() => {
    updateContent();
    // eslint-disable-next-line
  }, [clickedLink]);

  const updateContent = () => {
    if (clickedLink === "Brands") {
      setContent(brandPathes);
    } else if (clickedLink === "Information") {
      setContent(infoPathes);
    } else {
      setContent(null);
    }
  };

  const ShowSearchSection = () => {
    setShowingNav(false);
    return <SearchInput />;
  };

  return (
    <SectionContainer
      onClick={(e) =>
        isOpenPopup &&
        !e.target.classList.contains("search-input") &&
        !e.target.classList.contains("btn-search") &&
        !e.target.classList.contains("styled-link") &&
        !e.target.classList.contains("link-button")
          ? (setOpenPopup(false), setClickedLink(null))
          : null
      }
    >
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
        </NavLinks>
      ) : null}
      {content !== null ? (
        <PopupMenu>
          <PopupNavLinks>
            {content.map(({ path, title }, i) => {
              return (
                <PopupLinks key={i} to={path}>
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
        <ShowSearchSection />
      )}
    </SectionContainer>
  );
};

export default NavPopup;
