import React, {useState, useEffect} from "react";
import Event from "../components/Event";
import Filters from './Filters';

function Timeline() {
  const [state, setState] = useState({data: null})
  const [orderByDesc, setOder] = useState(false); // Use this for ordering your `state.data`

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

  const changeOrder = () => setOder(!orderByDesc); // Everytime you click on <p>sort by date</p> state should be update

  return(
    <React.Fragment>
      <Filters changeDataOrder={changeOrder} />
      {state.data === null ? "loading" :
       state.data.map((event, index) => {
        return (
          <div className="main--left--element" key={index}>
            <Event gsx$date={event.gsx$date} gsx$title={event.gsx$title} gsx$description={event.gsx$description} gsx$category={event.gsx$category} key={index} />
         </div>
        )
      })
    }
    </React.Fragment>
  )
}

export default Timeline