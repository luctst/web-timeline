import React from "react";
import SortByDate from "../assets/img/sort-by-date.svg";
import Arrow from "../assets/img/arrow.svg";

const Filters = () => {
  return (
    <React.Fragment>
      <div className="header--infobar">
        <div className="header--infobar--date">
          <img src={SortByDate} alt="icon"></img>
          <p className="is__sort__date">Sort by <span>Date</span></p>
          <img src={Arrow} width="20px" alt="icon"></img>
        </div>
        <div className="header--infobar--categories">
          <select className="is__select is__subTitle">
            <option value="Network">Catégories</option>
            <option value="Network">Network</option>
            <option value="Launch">Launch</option>
            <option value="Science">Science</option>
            <option value="Security">Security</option>
            <option value="Programming">Programming</option>
            <option value="Social-media">Social-Media</option>
            <option value="Design">Design</option>
          </select>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Filters