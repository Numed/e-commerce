import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 50px 0;
  padding: 0 150px;

  @media (max-width: 788px) {
    padding: 0 60px;
  }

  @media (max-width: 430px) {
    padding: 0 20px;
  }
`;

export const SectionInner = styled.div`
  display: flex;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: flex-start;
  flex-direction: row-reverse;
  width: 100%;
`;

export const ContentText = styled.p`
  font-family: "Karla";
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  max-width: 750px;
  color: #6f6f6f;
  margin-bottom: 20px;
`;

export const FormSection = styled.div`
  width: 30%;
  height: auto;

  @media (max-width: 788px) {
    width: 100%;
  }

  @media (max-width: 430px) {
    padding: 0 20px;
  }
`;

export const FormTextarea = styled.textarea`
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 3px;
  margin-right: 15px;
  outline-color: #8abdf9;
  padding: 10px;
  width: 705px;
  height: 150px;
  resize: vertical;

  @media (max-width: 1025px) {
    width: 100%;
  }

  @media (max-width: 788px) {
    width: 100%;
  }

  @media (max-width: 430px) {
    padding: 0 20px;
  }
`;
