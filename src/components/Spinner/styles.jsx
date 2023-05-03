import styled from "styled-components";


export const SpinnerContainer = styled.div`
  width: 48px;
  height: 48px;
  border: 5px dotted #000;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
