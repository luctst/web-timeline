import React from "react";
import SearchBarStyled from "./SearchBarStyled.style";
import SelectStyled from "./SelectStyled.style";

const SearchBar = (props) => {
  return (
    <SearchBarStyled className="input-group mb-3 search--bar">
      <div className="input-group-prepend">
        <SelectStyled className="form-control" id="filters--SelectStyled" onChange={props.searchFilter}>
          <option>Title</option>
          <option>Description</option>
        </SelectStyled>
        <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Search" onChange={props.handleChangedSearchInput} />
      </div>
    </SearchBarStyled>
  )
}

export default SearchBar