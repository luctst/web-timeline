import React from "react";

function EventOverview(props) {
  return (
    <div className="main--right--element">
      <div className="main--right--element--wrapper">
        <div className="main--right--element--wrapper--description">
          <h2 className="is__">Overview</h2>
          <div className="separator"></div>
          <p>{props.data.gsx$description.$t}</p>
          <h2 className="is__">Links</h2>
          <p><a href={`${props.data.gsx$linkone.$t}`}>{props.data.gsx$linkone.$t}</a></p>
          <p><a href={`${props.data.gsx$linktwo.$t}`}>{props.data.gsx$linktwo.$t}</a></p>
        </div>
        <div className="main--right--element--wrapper--related">
          <span className="is__arrow__close" onClick={e => props.closeOverview(e)} >&times;</span>
          <h2 className="is__">Related</h2>
          <div className="separator"></div>
          <h3>Category</h3>
          <p>{props.data.gsx$category.$t}</p>
          <h3>Related date</h3>
        </div>
      </div>
    </div>
  )
}

export default EventOverview