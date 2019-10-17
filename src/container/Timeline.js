import React, {useState, useEffect, useRef} from "react";
import Event from "../components/Event";
import Filters from './Filters';
import EventOverview from "../components/EventOverview";

function Timeline() {
  const hiddenOverview = useRef(null);

  const [data, setData] = useState([])
  const [orderByDesc, setOrder] = useState(false); // Use this for ordering your `data.data`
  const [filters, setFilters] = useState({
    category: "Network"
  });

  useEffect(() => {
    fetch(`https://spreadsheets.google.com/feeds/list/${process.env.REACT_APP_KEY}/1/public/values?alt=json`)
    .then(response => response.json())
    .then(dataParsed => setData([...dataParsed.feed.entry]))
  }, []);

  function handleChangeCategory(el) {
    if (el.target.value === filters.category) return null;

    const newState = {...filters};
    newState.category = el.target.value;

    setFilters(newState);
  }

  // const handleClickEventOverview = () => {
  //   document.body.classList.add("is__overflow__hidden");
  //   hiddenOverview.current.classList.remove("is__none");
  // }

  // const arrowClose = () => {
  //   hiddenOverview.current.classList.add("is__none");
  // }

  return(
    <React.Fragment>
      <Filters changedDataOrder={() => setOrder(!orderByDesc)} changedCategory={handleChangeCategory} />
      {
        (function () {
          if (data.length === 0) return "Loading..";

          if (orderByDesc) {
            return data.sort((a,b) => a-b).reverse().map((event, index) => filters.category === event.gsx$category.$t && <Event data={event} key={index}/>)
          }

          return data.sort((a,b) => a+b).reverse().map((event, index) => filters.category === event.gsx$category.$t && <Event data={event} key={index} />)
        })()
      }
      {/* <section className="main--right is__none" ref={hiddenOverview}>
        <EventOverview gsx$description={state.data.gsx$description.$t} closeOverview={arrowClose} />

        {
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
        }
      </section> */}
    </React.Fragment>
  )
}

export default Timeline