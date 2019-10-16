import React, {useState, useEffect, useRef} from "react";
import Event from "../components/Event";
import Filters from './Filters';
import EventOverview from "../components/EventOverview";

function Timeline() {
  const hiddenOverview = useRef(null);

  const [state, setState] = useState({
    data: null,
    filter: {
      category: ""
    }
  })
  const [orderByDesc, setOrder] = useState(false); // Use this for ordering your `state.data`

  useEffect(() => {
    fetch(`https://spreadsheets.google.com/feeds/list/${process.env.REACT_APP_KEY}/1/public/values?alt=json`)
    .then(response => response.json())
    .then(dataParsed => {
      const newState = dataParsed.feed.entry;
      console.log(newState[1]);
      setState({data: newState, filter: {category: ""} });
    })
    console.log(state.data);
  }, []);

  function handleChangeCategory(el) {
    console.log(el.target.value);
    const newState = {...state};
    console.log(newState.filter.category);
    newState.filter.category = el.target.value;
    console.log(newState.filter.category);
    console.log(newState);
    setState(newState);
  }

  const handleClickEventOverview = () => {
    // document.body.classList.add("is__overflow__hidden");
    hiddenOverview.current.classList.remove("is__none");
  }

  const arrowClose = () => {
    hiddenOverview.current.classList.add("is__none");
  }

  return(
    <React.Fragment>
      <Filters changedDataOrder={() => setOrder(!orderByDesc)} changedCategory={handleChangeCategory} />
      {/* <Filters changedDataOrder={() => setOrder(!orderByDesc)} /> */}
      <section className="main--left">
        {
          function () {
            if (state.data === null) {
              return "loading"
            } else {
              if (orderByDesc) {
                state.data.sort((a, b) => a + b).reverse();
                return state.data.map((event, index) => {
                  return (
                    <div className="main--left--element" key={index} onClick={handleClickEventOverview}>
                      <Event data={event} key={index} />
                    </div>
                  )
                })
              } else if(!orderByDesc) {
                state.data.sort((a, b) => a - b).reverse();
                return state.data.map((event, index) => {
                  return (
                    <div className="main--left--element" key={index} onClick={handleClickEventOverview} >
                      <Event data={event} key={index} />
                    </div>
                  )
                })
              }
            }
          }()
        }
      </section>
      <section className="main--right is__none" ref={hiddenOverview}>
        <EventOverview gsx$description={state.data.gsx$description.$t} closeOverview={arrowClose} />

        {/* {
          function () {
            if (state.data === null) {
              return "loading"
            } else {
              return state.data.map((event, index) => {
                return (
                  <EventOverview data={event} closeOverview={arrowClose} />
                )
              })
            }
          }()
        } */}
      </section>
    </React.Fragment>
  )
}

export default Timeline