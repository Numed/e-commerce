import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

export const InputInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  z-index: 11112;
  order: -1;
  padding: 0 100px;

  @media (max-width: 430px) {
    padding: 0 20px;
  }
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
  position: relative;

  @media (max-width: 430px) {
    padding: 10px;
    font-size: 1.35em;
  }

  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
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

export const CloseBtn = styled(IoIosClose)`
  color: #fff;
  position: absolute;
  width: 32px;
  height: 32px;
  right: 10%;
  top: 45.5%;
  cursor: pointer;

  & > svg {
    pointer-events: none;
  }
`;
