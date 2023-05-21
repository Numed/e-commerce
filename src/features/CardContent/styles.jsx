import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 40px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const CardInfo = styled.div`
  width: 33.3%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const InfoPrice = styled.h3`
  font-family: "Karla";
  font-weight: 400;
  font-size: 17.6px;
  line-height: 21px;
  color: #4d4d4d;
  margin-bottom: 20px;
`;

export const InfoDescription = styled.p`
  max-width: 385px;
  font-family: "Karla";
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #6f6f6f;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
    width: 100%:
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 15px;
`;

export const Label = styled.label`
  font-family: "Karla";
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.7px;
  color: #6f6f6f;
  margin-bottom: 10px;

  span {
    font-size: 12px;
    color: #e63946;
    letter-spacing: 1.1px;
    margin-bottom: 5px;
    font-family: "Karla";
    font-weight: 400;
    line-height: 17px;
  }
`;

export const Select = styled.select`
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 3px;
  padding: 11px;
  font-family: "Karla";
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #6f6f6f;
  min-width: 240px;
`;

export const Option = styled.option`
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 3px;
  padding: 11px;
  font-family: "Karla";
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #6f6f6f;
  min-width: 240px;
`;

export const Input = styled.input`
  padding: 11px 26px 11px 11px;
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 3px;
  min-width: 200px;
`;

export const BtnSubmit = styled.button`
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
  min-width: 240px;
  opacity: 0.9;
  tranistion: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;

export const CardPhotos = styled.div`
  width: 33.3%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainPhoto = styled.img`
  min-width: 100%;
  max-height: 400px;
  object-fit: contain;
`;
