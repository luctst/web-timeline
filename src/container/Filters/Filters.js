import React, {useState, useEffect, useRef } from "react";
import SortByDate from "../../assets/img/sort-by-date.svg";
import Arrow from "../../assets/img/arrow.svg";
import categoryData from "../../utils/sources.json";
import SearchBar from "../SearchBar/SearchBar";
import FiltersStyled from "./FiltersStyled.style";

const Filters = props => {
  const filterImg = useRef(null);
  const categories = [...categoryData.category]

  // const [isSticky, setSticky] = useState(false);
  // const ref = useRef(null);
  // const handleScroll = () => {
  //   setSticky(ref.current.getBoundingClientRect().top <= 0);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', () => handleScroll);
  //   };
  // }, []);

  function changedOrderArrow() {
    if (filterImg.current.style.transform === '') filterImg.current.style.transform = 'rotate(180deg)';
    else if (filterImg.current.style.transform === 'rotate(180deg)') filterImg.current.style.transform = '';

    props.changedDataOrder();
  }

  // function stickyFiltersScroll() {
  //   console.log(document.querySelector(".header--infobar"));
  //     const filters = document.querySelector(".header--infobar");
  //     const sticky = filters.offsetTop;
  //     console.log(sticky);
  //   // console.log(e);
  //   // let element = e.target;
  //   // if (element.scrollHeight - element.scrollTop === element.clientHeight) {
  //   // alert('CA SCROLL');
  //   // }
  //   console.log(document.querySelector(".header--infobar"))
  //   if (window.pageYOffset >= document.querySelector(".header--infobar").offsetTop) {
  //     alert("ça scroll");
  //   } else {
  //     alert("ça scroll pas");
  //   }
    // if (window.scrollBy(0, 10)) {
    //   alert("kebab")
    // }

    // if (window.pageXOffset === 10) {
    //   console.log("ça scroll ou quoi ?");
    // }
    // window.addEventListener("scroll", stickyFiltersScroll())
  // }

  return (
    <React.Fragment>
      {/* <div className={`is__${isSticky ? 'sticky' : ''}`} ref={ref}> */}

      <FiltersStyled className="header--infobar sticky--inner">
      {/* <FiltersStyled className="header--infobar is__sticky" onScroll={stickyFiltersScroll} ref={ref}> */}
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
          <SearchBar handleChangedSearchInput={props.handleChangedSearchInput} searchFilter={props.searchFilter} />
        </div>
      </FiltersStyled>
      {/* </div> */}

    </React.Fragment>
  )
}

export default Filters