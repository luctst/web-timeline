import React from "react";

const Filters = () => {
  return (
    <React.Fragment>
      <div className="header--infobar">
        <div className="header--infobar--date">
          <svg class="is__svg" viewBox="0 0 15 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="20px">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
              <g id="Desktop-HD-Copy" transform="translate(-75.000000, -207.000000)" stroke="#333333" stroke-width="2">
                <g id="nav" transform="translate(40.000000, 167.000000)">
                  <g id="Sort" transform="translate(36.000000, 32.000000)">
                    <g id="icn-sort" transform="translate(0.000000, 9.000000)">
                      <path d="M0,0.5 L13,0.5" id="Line-2"></path>
                      <path d="M0,4.5 L10,4.5" id="Line-2-Copy"></path>
                      <path d="M0,8.5 L5,8.5" id="Line-2-Copy-2"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <p class="is__sort__date">Sort by <span>Date</span></p>
          <svg class="is__svg chronologique" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
            viewBox="0 0 512 640" enable-background="new 0 0 512 512" space="preserve" width="20px">
            <path d="M262.446,386.006L509.337,138.99c3.548-3.562,3.548-9.344,0-12.906c-3.453-3.453-9.438-3.453-12.859,0  L255.993,366.662L15.555,126.083c-1.719-1.703-4.031-2.672-6.453-2.672s-4.734,0.969-6.453,2.672  c-3.532,3.562-3.532,9.344,0.016,12.906l246.875,247C253.024,389.443,258.993,389.459,262.446,386.006z" />
            <text
              x="0" y="527" fill="#fff" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created
                    by Gamma Designs</text><text x="0" y="532" fill="#fff" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from
            the Noun Project</text>
          </svg>
        </div>
        <div className="header--infobar--categories">
          <select className="is__select__is__subTitle">
            <option value="Network">Catégories</option>
            <option value="Network">Network</option>
            <option value="Launch">Launch</option>
            <option value="Science">Science</option>
            <option value="Security">Security</option>
            <option value="Programming">Programming</option>
            <option value="Social-media">Social-Media</option>
            <option value="Design">Design</option>
          </select>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Filters