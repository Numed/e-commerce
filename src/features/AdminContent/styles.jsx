import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
`;

export const SectionNav = styled.nav`
  width: 100%;
  height: auto;
  padding: 15px 0;
  background: #dadada;
  display: flex;
  justify-content: space-around;

  @media (max-width: 430px) {
    flex-wrap: wrap;
  }
`;

export const SectionButton = styled.button`
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.2s linear;

  & > svg {
    margin-right: 5px;
    transform: scale(1.1);
  }

  &:hover {
    opacity: 1;
  }
`;

export const SectionInner = styled.div`
  width: 100%;
  display: flex;
  aling-items: center;
  justify-content: center;
  height: auto;
  padding: 0 40px;
`;

export const StyledTable = styled.table`
  margin-top: 40px;
  width: 100%;
  padding: 15px;
  overflow-x: scroll;
  border-collapse: collapse;
`;

export const StyledThead = styled.thead``;
export const StyledTbody = styled.tbody``;

export const StyledTR = styled.tr`
  height: 70px;
`;

export const StyledTH = styled.th`
  height: 70px;
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  font-family: "Karla";
  font-weight: 500;
  font-size: 21px;
  line-height: 27px;
  color: #393939;
`;

export const StyledTD = styled.td`
  font-family: "Karla";
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: rgb(111, 111, 111);
  letter-spacing: 0.85px;
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  height: 100px;

  &.address__field {
    max-width: 410px;
    min-height: 100%;
    line-height: 35px;
  }

  &.items {
    color: #393939;
  }

  &.price {
    color: #393939;
    font-weight: 600;
  }
`;

export const ShowMoreBtn = styled.button`
  color: #393939;
  border: none;
  outline: none;
  font-size: 18px;
  background: none;
  cursor: pointer;
  margin-left: 5px;
`;

export const RemoveBtn = styled.button`
  color: #d22b2b;
  border: none;
  outline: none;
  font-size: 18px;
  background: none;
  cursor: pointer;
  margin-left: 5px;

  & > svg {
    pointer-events: none;
  }
`;

export const EmptyTitle = styled.h3`
  padding: 20px 0 0;
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 27px;
  font-family: "Karla";
  color: #6d6d6d;
  text-align: center;
`;
