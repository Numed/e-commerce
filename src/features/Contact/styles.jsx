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
`;

export const FormTextarea = styled.textarea`
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 3px;
  margin-right: 15px;
  padding: 10px;
  width: 705px;
  height: 150px;
  resize: vertical;
`;
