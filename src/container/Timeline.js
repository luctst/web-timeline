import React, {useState, useEffect} from "react";
import Event from "../components/Event";
import Filters from './Filters';

function Timeline() {
  // const filterImg = React.createRef();

  const [state, setState] = useState({data: null})
  const [orderByDesc, setOrder] = useState(false); // Use this for ordering your `state.data`

  useEffect(() => {
    fetch(`https://spreadsheets.google.com/feeds/list/${process.env.REACT_APP_KEY}/1/public/values?alt=json`)
    .then(response => response.json())
    .then(dataParsed => {
      const newState = dataParsed.feed.entry;
      console.log(newState[1]);
      setState({data: newState, oderByDesc: false});
    })
    console.log(state.data);
  }, []);

  return(
    <React.Fragment>
      <Filters changedDataOrder={() => setOrder(!orderByDesc)} />
      {
        function () {
          if (state.data === null) {
            return "loading"
          } else {
            if (!orderByDesc) {
              state.data.sort((a, b) => a + b).reverse();
              return state.data.map((event, index) => {
                return (
                  <div className="main--left--element" key={index}>
                    <Event data={event} key={index} />
                  </div>
                )
              })
            } else if(orderByDesc) {
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