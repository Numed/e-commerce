import styled from "styled-components";

export const ErrorContainer = styled.div`
  padding: 40px 175px;
  width: 100%;
  height: auto;
`;

export const ErrorText = styled.p`
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #6f6f6f;

  & > a {
    color: #393939;
    text-decoration: none;
    font-weight: 600;
  }
`;
