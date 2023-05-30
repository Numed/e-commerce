import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
  padding: 0 120px;
`;

export const SectionTitle = styled.h3`
  width: 100%;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  padding-bottom: 5px;
  color: #393939;
  border-bottom: 1px solid #dadada;
`;

export const SectionInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

export const SearchSection = styled.div`
  margin: 50px 0;
  width: 100%;
  height: auto;
`;

export const InputInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 60px 10px 0;
  font-size: 18px;
  color: #ccc;
  text-transform: uppercase;
  background: none;
  border: 0;
  outline: 0;
`;

export const SearchButton = styled.button`
  display: inline-block;
  margin-top: 20px;
  text-align: left;
  outline: 0;
  cursor: pointer;
  color: #eee;
  background-color: transparent;
  border: none;
  letter-spacing: 1.75px;
`;

export const CardsSections = styled.div`
  border-top: 1px solid #dadada;
  padding-top: 40px;
`;

export const CardMask = styled.div`
  position: relative;
  transition: all 0.25s linear;
  height: 100%;
`;

export const CardActions = styled.div`
  background-color: none;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  position: absolute;
  transition: all 0.25s linear;

  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const CardImg = styled.img`
  width: 100%;
  object-fit: contain;
  pointer-events: none;
  display: block;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px 20px 20px;
  background: #fff;
  position: relative;
`;

export const CardEdit = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 10px;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;

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

export const CardRemove = styled(CardEdit)`
  color: #e63946;

  & > svg {
    color: #e63946;
  }
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
