import React, { useState, useEffect } from "react";
import Event from "../../components/Event/Event";
import Filters from '../Filters/Filters';
import Loader from "../../components/Loader/Loader";
import ButtonTopStyled from "../styled/ButtonTopStyled.style";

function Timeline() {
  const [data, setData] = useState([])
  const [orderByDesc, setOrder] = useState(false); // Use this for ordering your `data.data`
  const [filters, setFilters] = useState({
    category: "Network",
    showEvents: {
      showList: true,
      searchInput: ""
    }
  });

  useEffect(() => {
    fetch(`https://spreadsheets.google.com/feeds/list/${process.env.REACT_APP_KEY}/1/public/values?alt=json`)
      .then(response => response.json())
      .then(dataParsed => setData([...dataParsed.feed.entry]))
  }, []);

  function handleChangeCategory(el) {
    if (el.target.value === filters.category) return null;

    const newState = { ...filters };

    newState.category = el.target.value;

    setFilters(newState);

  }

  function handleOnChange(e) {
    const newState = {...filters};

    if (e.target.value.length !== "") {
      newState.showEvents.showList = false;
      newState.showEvents.searchInput = e.target.value;
      setFilters(newState)
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <React.Fragment>
      <ButtonTopStyled onClick={topFunction}><i className="fas fa-arrow-up"></i></ButtonTopStyled>
      <Filters changedDataOrder={() => setOrder(!orderByDesc)} changedCategory={handleChangeCategory} handleChangedSearchInput={e => handleOnChange(e)} />
      <section className="main--left">
        {
          function () {
            if (data.length === 0) return <Loader />;

            if (data.length !== 0) {
              if (orderByDesc) {
                if (filters.showEvents.showList) {
                  return data.sort((a, b) => a + b).reverse().map((event, index) => filters.category === event.gsx$category.$t && <Event data={event} key={index} />)
                } else if (!filters.showEvents.showList) {
                  return data.sort((a, b) => a + b).reverse().map((event, index) => {
                    return event.gsx$title.$t.includes(filters.showEvents.searchInput) ?
                      filters.category === event.gsx$category.$t && <Event data={event} key={index} /> :
                      null
                  })
                }
              }
              if (!orderByDesc) {
                if (filters.showEvents.showList) {
                  return data.sort((a, b) => a - b).reverse().map((event, index) => filters.category === event.gsx$category.$t && <Event data={event} key={index} />)
                } else if (!filters.showEvents.showList) {
                  return data.sort((a, b) => a - b).reverse().map((event, index) => {
                    return event.gsx$title.$t.includes(filters.showEvents.searchInput) ?
                      filters.category === event.gsx$category.$t && <Event data={event} key={index} /> :
                      null
                  })
                }
              }

            }
          }()
        }
      </section>
    </React.Fragment>
  )
}

export default Timeline