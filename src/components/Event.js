import React from "react";

function Event() {
    return (
      <React.Fragment>
        <div className="event--date">
          <p>20/10/2019</p>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h1>Title</h1>
            </div>
              <div className="card-description">
                  <p>description</p>
              </div>
            <div className="card--category">
                <p>Category</p>
                </div>
            </div>
          </div>
      </React.Fragment>
    )
  }

    export default Event