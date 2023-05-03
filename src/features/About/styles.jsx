import styled from "styled-components";
import bg from "../../img/about.png";

export const AboutContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
  padding: 0 175px;
`;

export const AboutImage = styled.div`
  background: url(${bg}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 500px;
  margin-bottom: 40px;
`;

export const AboutTextContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

export const AboutText = styled.p`
  font-family: "Karla";
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #6f6f6f;
  margin-bottom: 20px;

  & > span {
    font-weight: 700;
  }
`;
