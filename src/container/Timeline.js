import React, {useState, useEffect} from "react";
import Event from "../components/Event";
import Filters from './Filters';

function Timeline() {
  const filterImg = React.createRef();

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

  const changeOrder = () => {
    if (filterImg.current.style.transform === '') {
      filterImg.current.style.transform = 'rotate(180deg)'
        const newState = {...state}
        state.data.sort((a, b) => a-b).reverse()
        setState(newState)
    } else if(filterImg.current.style.transform === 'rotate(180deg)') {
          filterImg.current.style.transform = '';
          const newState = {...state}
          state.data.sort((a, b) => a + b).reverse()
          setState(newState)
        }
    setOder(!orderByDesc); // Everytime you click on <p>sort by date</p> state should be update
  }

  return(
    <React.Fragment>
      <Filters ref={filterImg} changeDataOrder={changeOrder} />

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