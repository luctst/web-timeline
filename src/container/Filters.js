import React, {useRef} from "react";
import SortByDate from "../assets/img/sort-by-date.svg";
import Arrow from "../assets/img/arrow.svg";

const Filters = props => {
  const filterImg = useRef(null);

  function changedOrderArrow() {
    if (filterImg.current.style.transform === '') {
      filterImg.current.style.transform = 'rotate(180deg)'
      // state.data.sort((a, b) => a-b).reverse()
    } else if(filterImg.current.style.transform === 'rotate(180deg)') {
      filterImg.current.style.transform = '';
      // state.data.sort((a, b) => a + b).reverse()
    }
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