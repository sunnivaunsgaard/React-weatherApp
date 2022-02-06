import React from "react";
import "./FormSkeleton.css";

export default function FormSkeleton() {
  return (
    <form className="FormSkeleton">
      <h1>Weather Forecast</h1>
      <input
        type="search"
        placeholder=" Type in city"
        className="form-control shadow-sm search"
        id="type-city"
        autoComplete="off"
      />
      <span className="CitySubmit">
        <input
          type="submit"
          value="Search"
          className="btn btn-outline-secondary"
        />
      </span>
    </form>
  );
}
