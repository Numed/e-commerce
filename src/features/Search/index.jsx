import { useState } from "react";
import { InputInner, Input, SearchButton } from "./styles";

const SearchInput = () => {
  const [value, setValue] = useState("");

  const onSubmit = () => {
    console.log(value);
  };

  return (
    <InputInner>
      <Input
        className="search-input"
        type="search"
        onChange={(e) => setValue(e.target.value)}
        placeholder="SEARCH THE STORY"
      />
      <SearchButton className="btn-search" onClick={onSubmit}>
        Search
      </SearchButton>
    </InputInner>
  );
};

export default SearchInput;
