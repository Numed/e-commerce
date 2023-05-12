import styled from "styled-components";

export const CartInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
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
  padding-bottom: 40px;
  height: 100%;
  overflow-y: scroll;
`;

export const ItemsImg = styled.img`
  width: 75px;
  height: 75px;
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
