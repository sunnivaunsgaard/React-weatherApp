import React from "react";
import "./OptionalLocations.css";

export default function OptionalLocations() {
  return (
    <div className="OptionalLocations d-flex justify-content-between pt-3 pb-4">
      <span>
        <button className="YourLocation"> Your location </button>
      </span>
      <span>
        <button className="Tokyo"> Tokyo </button>
      </span>
      <span>
        <button className="Berlin"> Berlin </button>
      </span>
      <span>
        <button className="Quito"> Quito </button>
      </span>
    </div>
  );
}
