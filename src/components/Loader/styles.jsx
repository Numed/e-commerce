import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 1111;
  position: fixed;
`;

export const LoaderInner = styled.div`
  width: 48px;
  height: 48px;
  display: block;
  margin: 15px auto;
  position: relative;
  color: #333;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  &::after,
  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 24px;
    top: 50%;
    left: 50%;
    transform: scale(0.5) translate(0, 0);
    background-color: #333;
    border-radius: 50%;
    animation: animloader 1s infinite ease-in-out;
  }

  &::before {
    background-color: #ff3d00;
    transform: scale(0.5) translate(-48px, -48px);
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes animloader {
    50% {
      transform: scale(1) translate(-50%, -50%);
    }
  }
`;
