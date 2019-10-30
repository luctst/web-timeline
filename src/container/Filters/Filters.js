import React, { useRef } from "react";
import SortByDate from "../../assets/img/sort-by-date.svg";
import Arrow from "../../assets/img/arrow.svg";
import categoryData from "../../utils/sources.json";
import SearchBar from "../SearchBar/SearchBar";

const Filters = props => {
  const filterImg = useRef(null);
  const categories = [...categoryData.category]

  function changedOrderArrow() {
    if (filterImg.current.style.transform === '') filterImg.current.style.transform = 'rotate(180deg)';
    else if (filterImg.current.style.transform === 'rotate(180deg)') filterImg.current.style.transform = '';

    props.changedDataOrder();
  }

  return (
    <React.Fragment>
      <div className="header--infobar">
        <div className="header--infobar--date" onClick={changedOrderArrow}>
          <img src={SortByDate} alt="icon"></img>
          <p className="is__sort__date">Sort by <span>Date</span></p>
          <img src={Arrow} width="20px" alt="icon" ref={filterImg}></img>
        </div>
        <div className="header--infobar--categories">
          <select className="is__select is__subTitle" onChange={e => props.changedCategory(e)}>
            {
              categories.map(category => {
                return (
                  <option value={category} key={category}>{category}</option>
                )
              })
            }
          </select>
        </div>
        <div className="header--infobar--search">
          <SearchBar handleChangedSearchInput={props.handleChangedSearchInput} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Filters