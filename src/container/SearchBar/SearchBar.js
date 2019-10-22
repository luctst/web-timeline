import React from "react";
import SearchBarStyled from "./SearchBarStyled.style";

const SearchBar = (props) => {
  return(
  <SearchBarStyled className="input-group mb-3 search--bar">
    <div className="input-group-prepend">
      <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filters</button>
      <div className="dropdown-menu">
      <ul className="dropdown--item--ul">
        <li className="dropdown--item--li"> <a href="#/" className="dropdown--item--a">Title</a></li>
        <li className="dropdown--item--li"> <a href="#/" className="dropdown--item--a">Description</a></li>
      </ul>
      </div>
      <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Search" onChange={props.handleChangedSearchInput} />
    </div>
  </SearchBarStyled>
  )
}

export default SearchBar