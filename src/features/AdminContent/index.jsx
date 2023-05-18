import { useState } from "react";
import { BiTable } from "react-icons/bi";
import { MdOutlineAddCard } from "react-icons/md";

import {
  SectionContainer,
  SectionNav,
  SectionButton,
  SectionInner,
  StyledTable,
  StyledTbody,
  StyledTR,
  StyledTH,
  StyledTD,
} from "./styles";
import { ordersList } from "../Constants";

const AdminContent = () => {
  const [orders, setOrders] = useState(ordersList);
  const [isOpenCards, setIsOpenCards] = useState(false);
  return (
    <SectionContainer>
      <SectionNav>
        <SectionButton>
          <BiTable />
          Table with orders
        </SectionButton>
        <SectionButton>
          <MdOutlineAddCard />
          Create Card
        </SectionButton>
      </SectionNav>
      <SectionInner>
        {!isOpenCards ? (
          <StyledTable>
            <StyledTR>
              <StyledTH>Order number</StyledTH>
              <StyledTH>Full Name</StyledTH>
              <StyledTH>Items</StyledTH>
              <StyledTH>Phone Number</StyledTH>
              <StyledTH>Address</StyledTH>
              <StyledTH>Price</StyledTH>
            </StyledTR>
            {ordersList.map(
              ({ id, items, address, phone, fullName, total }) => {
                return (
                  <StyledTbody key={id}>
                    <StyledTR>
                      <StyledTD>{id}</StyledTD>
                      <StyledTD>{fullName}</StyledTD>
                      <StyledTD className="items">{items}</StyledTD>
                      <StyledTD>{phone}</StyledTD>
                      <StyledTD>{address}</StyledTD>
                      <StyledTD className="price">{total}</StyledTD>
                    </StyledTR>
                  </StyledTbody>
                );
              }
            )}
          </StyledTable>
        ) : null}
      </SectionInner>
    </SectionContainer>
  );
};

export default AdminContent;
