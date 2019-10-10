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
    <div className="main--left--element">
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  )
}

export default Timeline