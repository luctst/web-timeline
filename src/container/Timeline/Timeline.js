import React, {useState, useEffect} from "react";
import Event from "../../components/Event/Event";
import Filters from '../Filters/Filters';
import Loader from "../../components/Loader/Loader";
import { fdatasync } from "fs";

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

    const newState = {...filters};
    newState.category = el.target.value;

    setFilters(newState);
  }

  function handleOnChange(e) {
  //   console.log(e.target.value);
  //   console.log(filters.showEvents.searchInput);

    if(e.target.value === filters.showEvents.searchInput) return null;

    // let newData = {...data};
    let newData = [];
    console.log(newData);

    const newState = {...filters}
    newState.showEvents.searchInput = e.target.value

    console.log(newState);
    data.map(event => {
      if (event.gsx$title.$t.includes(newState.showEvents.searchInput)) {
        console.log(event);
        newData.push(event)
        // setData([...newData, event]);
        console.log("------------------------------------------------");
        console.log(newData);

        setData(newData);
      }
    })
    console.log(data);
  }

  return(
    <React.Fragment>
      {/* <Filters changedDataOrder={() => setOrder(!orderByDesc)} changedCategory={handleChangeCategory} /> */}
      <Filters changedDataOrder={() => setOrder(!orderByDesc)} changedCategory={handleChangeCategory} handleChangedSearchInput={e => handleOnChange(e)}/>
      <section className="main--left">
        {
          (function () {
            if (data.length === 0) return <Loader />;

            if (orderByDesc) {
              if (filters.showEvents.showList) {
                return data.sort((a,b) => a-b).reverse().map((event, index) => filters.category === event.gsx$category.$t && <Event data={event} key={index} />)
              }
            }
            if (!orderByDesc) {
              if (filters.showEvents.showList) {
                  return data.sort((a,b) => a+b).reverse().map((event, index) => filters.category === event.gsx$category.$t && <Event data={event} key={index} />)
                // return data.map(e => {
                //   return e.gsx$title.$t.includes(filters.showEvents.showList.searchInput) ?
                //   data.sort((a,b) => a+b).reverse().map((event, index) => filters.category === event.gsx$category.$t && <Event data={event} key={index} />) :
                //   null
                // })

              }
            }
            // if (!orderByDesc) {
            //   if (!filters.showEvents.showList) {
            //     return data.map(e => {
            //       return e.gsx$title.$t.includes(filters.showEvents.showList.searchInput) ?
            //       data.sort((a,b) => a+b).reverse().map((event, index) => filters.category === event.gsx$category.$t && <Event data={event} key={index} />) :
            //       null
            //     })
            //     // return data.sort((a,b) => a+b).reverse().map((event, index) => filters.category === event.gsx$category.$t && <Event data={event} key={index} />)
            //   }
            // }
          })()
        }
      </section>
    </React.Fragment>
  )
}

export default Timeline