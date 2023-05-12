import styled from "styled-components";

export const InputInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  z-index: 11112;
  order: -1;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 60px 10px 0;
  font-size: 32px;
  color: #ccc;
  text-transform: uppercase;
  background: 0 0;
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
