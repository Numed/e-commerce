import styled from "styled-components";
import Masonry from "react-responsive-masonry";

export const SectionChapter = styled.span`
  font-family: "Karla";
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #6f6f6f;
  margin: 0 0 5px 125px;
`;

export const CardsSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 150px;
  margin-bottom: 40px;
`;

export const StyledMasonry = styled(Masonry)`
  event-pointer: none;
  & > div {
    gap: 120px !important;

    &:nth-child(even) > div {
      height: 20%;
    }

    &:nth-child(odd) > div {
      height: 25%;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px 20px 20px;
  background: #fff;
  cursor: pointer;
`;

export const CardMask = styled.div`
  position: relative;
  transition: all 0.25s linear;
`;

export const CardActions = styled.div`
  background-color: none;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  transition: all 0.25s linear;

  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const ActionButton = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: #ffffff;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    border-bottom: 1px solid #eee;
    opacity: 0;
    transition: all 0.25s linear;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardTextContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CardBrand = styled.h5`
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #6f6f6f;
`;

export const CardTitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #393939;
  margin-bottom: 10px;
`;

export const CardPrice = styled.span`
  font-family: "Karla";
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #6f6f6f;
`;
