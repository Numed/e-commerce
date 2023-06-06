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

  @media (max-width: 788px) {
    padding: 0 60px;
  }

  @media (max-width: 430px) {
    padding: 0 20px;
  }
`;

export const AboutInner = styled.div`
  display: flex;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: flex-start;
  flex-direction: row-reverse;
  width: 100%;
`;

export const AboutImage = styled.div`
  background: url(${bg}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 500px;
  margin: 0 40px 40px 0;

  @media (max-width: 430px) {
    margin: 0;
  }
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
  max-width: 865px;

  & > span {
    font-weight: 700;
  }
`;
