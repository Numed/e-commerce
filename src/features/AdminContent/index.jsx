import { useState, useRef, useEffect, useContext } from "react";
import { BiTable } from "react-icons/bi";
import { MdOutlineAddCard, MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
import CreateProductContent from "../CreateProductContent";
import useRequestService from "../../service";
import { notifyError, notifySuccses } from "../../helpers/notify";
import { LoginContext } from "../Context";
import ProductsAction from "../ProductsAction";

const AdminContent = () => {
  const [orders, setOrders] = useState({});
  const [activeSection, setActiveSection] = useState("orders");
  const [isShowingMore, setIsShowingMore] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);
  const addressRefs = useRef([]);
  const { user } = useContext(LoginContext);
  const { removeOrder, getOrders } = useRequestService();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.email !== undefined) {
      getOrders().then(onReceive).catch(onError);
    } else {
      navigate("/login");
      notifyError("You should sign in first.");
    }
    // eslint-disable-next-line
  }, []);

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
    if (orders.length > 0) {
      const filterOrders = orders.filter((el) => el.id !== id);
      setOrders(filterOrders);
      notifySuccses(data.message);
    } else {
      setOrders({});
    }
  };

  const onReceive = (orders) => {
    setOrders(orders);
  };

  const onError = (data) => {
    notifyError(data);
  };

  const ViewContent = ({ orders }) => {
    return (
      <>
        {orders.map(({ id, items, address, phone, fullName, totalPrice }) => {
          return (
            <StyledTbody key={id}>
              <StyledTR>
                <StyledTD>{id}</StyledTD>
                <StyledTD>{fullName}</StyledTD>
                <StyledTD className="items">{items}</StyledTD>
                <StyledTD>{phone}</StyledTD>
                <StyledTD
                  ref={(el) => (addressRefs.current[id] = el)}
                  className="address__field"
                >
                  {isShowingMore && activeOrder === address.substring(0, 30)
                    ? address
                    : address.substring(0, 30)}
                  <ShowMoreBtn onClick={(e) => onRemoveShowing(e.target)}>
                    {isShowingMore && activeOrder === address.substring(0, 30)
                      ? "Show less"
                      : "..."}
                  </ShowMoreBtn>
                </StyledTD>
                <StyledTD className="price">{totalPrice + "$"}</StyledTD>
                <StyledTD>
                  <RemoveBtn onClick={(e) => onRemoveOrder(e.target)}>
                    <MdDelete />
                  </RemoveBtn>
                </StyledTD>
              </StyledTR>
            </StyledTbody>
          );
        })}
      </>
    );
  };

  const content = orders.length > 0 ? <ViewContent orders={orders} /> : null;

  return (
    <SectionContainer>
      <SectionNav>
        <SectionButton onClick={() => setActiveSection("orders")}>
          <BiTable />
          Table with orders
        </SectionButton>
        <SectionButton onClick={() => setActiveSection("product")}>
          <MdOutlineAddCard />
          Create Product
        </SectionButton>
        <SectionButton onClick={() => setActiveSection("actions")}>
          <MdEdit />
          Products Actions
        </SectionButton>
      </SectionNav>
      <SectionInner>
        {activeSection === "orders" ? (
          <StyledTable>
            {orders.length > 0 ? (
              <>
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
                {content}
              </>
            ) : (
              <EmptyTitle>The order list is empty yet.</EmptyTitle>
            )}
          </StyledTable>
        ) : activeSection === "actions" ? (
          <ProductsAction />
        ) : (
          <CreateProductContent />
        )}
      </SectionInner>
    </SectionContainer>
  );
};

export default AdminContent;
