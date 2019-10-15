import React, {useState, useRef} from "react";
import SortByDate from "../assets/img/sort-by-date.svg";
import Arrow from "../assets/img/arrow.svg";

const Filters = (props) => {
  const [state, setState] = useState({
    isOrderDesc: true
  })
  const filterImg = useRef(null);

  const handleClick = () => {
    // console.log(props.data);
    // state.filterData = props.data
    console.log(props);
    if (filterImg.current.style.transform === '') {
      const newState = {...state}
      newState.isOrderDesc = true
      filterImg.current.style.transform = 'rotate(180deg)'
      props.data.sort((a, b) => a-b).reverse()
      setState(newState)

    } else if(filterImg.current.style.transform === 'rotate(180deg)') {
      const newState = {...state}
      filterImg.current.style.transform = '';
      newState.isOrderDesc = false
      // console.log(props);
      // return (props.data.sort((a, b) => a-b).reverse())
      props.data.sort((a, b) => a + b).reverse()
      setState(newState)
    }
  }

  return (
    <React.Fragment>
      <div className="header--infobar">
        <div className="header--infobar--date" onClick={handleClick}>
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