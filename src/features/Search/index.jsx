import { useState, useEffect, useContext } from "react";

import { InputInner, Input, SearchButton, CloseBtn } from "./styles";
import { PopupContext } from "../../features/Context";

const SearchInput = ({ setShowingNav }) => {
  const [value, setValue] = useState("");
  const { setOpenPopup } = useContext(PopupContext);

  useEffect(() => {
    setShowingNav(false);
  }, []);

  const onSubmit = () => {
    console.log(value);
  };

  return (
    <InputInner>
      <Input
        className="search-input"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
