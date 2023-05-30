import styled from "styled-components";

export const CartInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow-y: auto;
  z-index: 1112;
  position: relative;
`;

export const CartCurrencyTitle = styled.h4`
  margin: 0 0 5px;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: #6f6f6f;
  margin-bottom: 20px;
`;

export const ItemsContainer = styled.div`
  padding: 40px 0;
  border-top: 1px solid #dadada;
  border-bottom: 1px solid #dadada;
  width: 100%:
  height: 100%;
`;

export const ItemInner = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #dadada;
  padding: 40px 0;
  height: 100%;
  min-width: 120px;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemsImg = styled.img`
  max-width: 142px;
  max-height: 120px;
  object-fit: cover;
`;

export const ItemText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const ItemTitle = styled.h5`
  font-weight: 400;
  letter-spacing: 0.05em;
  color: #393939;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ItemCount = styled.h6`
  font-weight: 400;
  letter-spacing: 0.05em;
  color: #6f6f6f;
  text-transform: uppercase;
  font-size: 14px;
`;

export const TotalContainter = styled.div`
  text-align: right;
  margin-top: 40px;
  border-bottom: 1px solid #dadada;
`;

export const TotalTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 14px;
  font-family: "Karla";
  color: #6f6f6f;
`;

export const TotalPrice = styled.h4`
  font-size: 24px;
  color: #4d4d4d;
  font-weight: 400;
`;

export const BtnSubmit = styled.button`
  width: 100%;
  display: block;
  text-align: center;
  font-family: "Karla";
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.4px;
  background: #393939;
  border: 1px solid #393939;
  border-radius: 3px;
  color: #ffffff;
  padding: 12px 22px;
  cursor: pointer;
  margin-top: 15px;
  opacity: 0.8;
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;

export const EmptyTitle = styled.h3`
  padding: 20px 0 0;
  border-top: 1px solid #dadada;
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 27px;
  font-family: "Karla";
  color: #6d6d6d;
`;

export const ItemMask = styled.div`
  position: relative;
  transition: all 0.25s linear;
  height: 100%;
`;

export const MaskCount = styled.h4`
  width: 70px;
  height: 70px;
  font-size: 30px;
  line-height: 70px;
  color: #ccc;
  text-align: center;
  cursor: default;
`;

export const CartActions = styled.div`
  background-color: none;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: absolute;
  transition: all 0.25s linear;

  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ActionButton = styled.button`
  font-weight: 400;
  font-size: 28px;
  text-transform: uppercase;
  padding: 12px;
  color: #393939;
  background: rgb(204, 204, 204);
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover::after {
    opacity: 1;
  }
`;
