import { useState, useRef } from "react";
import { BiTable } from "react-icons/bi";
import { MdOutlineAddCard, MdDelete } from "react-icons/md";

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
  ShowMoreBtn,
  StyledThead,
  RemoveBtn,
  EmptyTitle,
} from "./styles";
import { ordersList } from "../Constants";
import CreateCardContent from "../CreateCardContent";
import useRequestService from "../../service";
import { notifyError, notifySuccses } from "../../helpers/notify";

const AdminContent = () => {
  const [orders, setOrders] = useState(ordersList);
  const [isOpenCards, setIsOpenCards] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);
  const addressRefs = useRef([]);

  const { removeOrder } = useRequestService();

  const onRemoveShowing = (target) => {
    const targetValue = target.parentElement.textContent.slice(0, -3);
    const address = addressRefs.current.filter((el) => {
      return el.textContent.includes(targetValue);
    });
    setActiveOrder(address[0].textContent.slice(0, -3));
    setIsShowingMore(!isShowingMore);
  };

  const onRemoveOrder = (target) => {
    const address = addressRefs.current.filter((el) => {
      return el.parentElement === target.parentElement.parentElement;
    });
    const id = +address[0].parentElement.firstElementChild.textContent;
    removeOrder(id)
      .then((data) => onResolve(data, id))
      .catch(onError);
  };

  const onResolve = (data, id) => {
    const filterOrders = orders.filter((el) => el.id !== id);
    setOrders(filterOrders);
    notifySuccses(data.message);
  };

  const onError = (data) => {
    notifyError(data);
  };

  return (
    <SectionContainer>
      <SectionNav>
        <SectionButton onClick={() => setIsOpenCards(false)}>
          <BiTable />
          Table with orders
        </SectionButton>
        <SectionButton onClick={() => setIsOpenCards(true)}>
          <MdOutlineAddCard />
          Create Card
        </SectionButton>
      </SectionNav>
      <SectionInner>
        {!isOpenCards ? (
          <StyledTable>
            {orders.length > 0 ? (
              <StyledThead>
                <StyledTR>
                  <StyledTH>Order number</StyledTH>
                  <StyledTH>Full Name</StyledTH>
                  <StyledTH>Items</StyledTH>
                  <StyledTH>Phone Number</StyledTH>
                  <StyledTH>Address</StyledTH>
                  <StyledTH>Price</StyledTH>
                </StyledTR>
              </StyledThead>
            ) : (
              <EmptyTitle>The order list is empty yet.</EmptyTitle>
            )}
            {orders.map(({ id, items, address, phone, fullName, total }) => {
              return (
                <StyledTbody key={id}>
                  <StyledTR>
                    <StyledTD>{id}</StyledTD>
                    <StyledTD>{fullName}</StyledTD>
                    <StyledTD className="items">{items}</StyledTD>
                    <StyledTD>{phone}</StyledTD>
                    <StyledTD
                      ref={(el) => (addressRefs.current[id] = el)}
                      className="address"
                    >
                      {isShowingMore && activeOrder === address.substring(0, 30)
                        ? address
                        : address.substring(0, 30)}
                      <ShowMoreBtn onClick={(e) => onRemoveShowing(e.target)}>
                        {isShowingMore &&
                        activeOrder === address.substring(0, 30)
                          ? "Show less"
                          : "..."}
                      </ShowMoreBtn>
                    </StyledTD>
                    <StyledTD className="price">{total}</StyledTD>
                    <StyledTD>
                      <RemoveBtn onClick={(e) => onRemoveOrder(e.target)}>
                        <MdDelete />
                      </RemoveBtn>
                    </StyledTD>
                  </StyledTR>
                </StyledTbody>
              );
            })}
          </StyledTable>
        ) : (
          <CreateCardContent />
        )}
      </SectionInner>
    </SectionContainer>
  );
};

export default AdminContent;
