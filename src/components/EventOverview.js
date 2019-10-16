import React from "react";

function EventOverview(props) {
  return (
    <div className="main--right--element">
      <div className="main--right--element--wrapper">
        <div className="main--right--element--wrapper--description">
          <h2 className="is__">Overview</h2>
          <div className="separateur"></div>
          <p>{props.gsx$description.$t}</p>
          <h2 className="is__">Links</h2>
          <p><a href={`${props.gsx$linkone.$t}`}>{props.gsx$linkone.$t}</a></p>
          <p><a href={`${props.gsx$linktwo.$t}`}>{props.gsx$linktwo.$t}</a></p>
        </div>
        <div className="main--right--element--wrapper--related">
          <span className="is__arrow__close" onClick={e => props.closeOverview(e)} >&times;</span>
          <h2 className="is__">Related</h2>
          <div className="separateur"></div>
          <h3>Category</h3>
          <p>{props.gsx$category.$t}</p>
          <h3>Related date</h3>
        </div>
      </div>
    </div>
  )
}

export default EventOverview