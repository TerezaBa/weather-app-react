import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  let form = (
    <div className="SearchEngine">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city"
              autofocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" className="btn btn-dark" value="Search" />
          </div>
        </div>
      </form>
    </div>
  );

  return form;
}
