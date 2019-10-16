import React, {useState, useEffect} from "react";
import Event from "../components/Event";
import Filters from './Filters';

function Timeline() {
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

  return(
    <React.Fragment>
      <Filters changedDataOrder={() => setOrder(!orderByDesc)} changedCategory={handleChangeCategory} />
      {
        (function () {
          if (data.length === 0) return "Loading..";

          if (orderByDesc) {
            return data.reverse().map((event, index) => filters.category === event.gsx$category.$t && <Event data={event} key={index}/>)
          }

          return data.map((event, index) => filters.category === event.gsx$category.$t && <Event data={event} key={index} />)
        })()
      }
    </React.Fragment>
  )
}

export default Timeline