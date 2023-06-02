import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { InputInner, Input, SearchButton, CloseBtn } from "./styles";
import { PopupContext, ProductsContext } from "../../features/Context";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const { setOpenPopup, setShowingNav } = useContext(PopupContext);
  const { products } = useContext(ProductsContext);
  const navigate = useNavigate();

  useEffect(() => {
    setShowingNav(false);
  }, []);

  const onSubmit = () => {
    const filterProducts = products.filter(
      (el) => el.title.toLowerCase() === value.toLowerCase()
    )[0];
    if (filterProducts !== undefined) {
      navigate(`/products/${filterProducts.id}`);
    } else {
      navigate("/error");
    }
    setOpenPopup(false);
  };

  return (
    <InputInner>
      <Input
        className="search-input"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(event) => (event.key === "Enter" ? onSubmit() : null)}
        placeholder="SEARCH THE STORY"
      />
      <CloseBtn onClick={() => setOpenPopup(false)} />
      <SearchButton className="btn-search" onClick={onSubmit}>
        Search
      </SearchButton>
    </InputInner>
  );
};

export default SearchInput;
