import React, {useState, useEffect} from "react";
import Event from "../components/Event";
import Filters from './Filters';

function Timeline() {
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

  return(
    <React.Fragment>
      <Filters changedDataOrder={() => setOrder(!orderByDesc)} changedCategory={handleChangeCategory} />
      {/* <Filters changedDataOrder={() => setOrder(!orderByDesc)} /> */}
      {
        function () {
          if (state.data === null) {
            return "loading"
          } else {
            if (orderByDesc) {
              state.data.sort((a, b) => a + b).reverse();
              return state.data.map((event, index) => {
                return (
                  <div className="main--left--element" key={index}>
                    <Event data={event} key={index} />
                  </div>
                )
              })
            } else if(!orderByDesc) {
              state.data.sort((a, b) => a - b).reverse();
              return state.data.map((event, index) => {
                return (
                  <div className="main--left--element" key={index}>
                    <Event data={event} key={index} />
                  </div>
                )
              })
            }
          }
        }()
      }
    </React.Fragment>
  )
}

export default Timeline