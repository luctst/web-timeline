import React, {useState, useEffect} from "react";
import Event from "../components/Event";


function Timeline() {
  const [state, setState] = useState({
      data: null
  })


  useEffect(() => {
    fetch(`https://spreadsheets.google.com/feeds/list/${process.env.REACT_APP_KEY}/1/public/values?alt=json`)
    .then(response => response.json())
    .then(dataParsed => {
      const newState = dataParsed.feed.entry;
      console.log(newState);
      setState(newState);
    })
    console.log(state.data);
  }, []);

  return(
    <React.Fragment>
      <div className="main--left--element">
        <Event />
      </div>
      <div className="main--left--element">
        <Event />
      </div>
      <div className="main--left--element">
        <Event />
      </div>
      <div className="main--left--element">
        <Event />
      </div>
      <div className="main--left--element">
        <Event />
      </div>
      <div className="main--left--element">
        <Event />
      </div>
      <div className="main--left--element">
        <Event />
      </div>
      <div className="main--left--element">
        <Event />
      </div>
      <div className="main--left--element">
        <Event />
      </div>
    </React.Fragment>
  )
}

export default Timeline