import "./form.scss";
import {useState} from "react"

export default function Form(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon",
    };
    props.handleApiCall(formData);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
        <select name="method" id="method-select">
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>
        <input name="url" type="text" />
        <button type="submit">GO!</button>
      </div>

    </form>
  );
}
