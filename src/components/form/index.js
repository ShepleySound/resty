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
      <label>
        <span>URL: </span>
        <input name="url" type="text" />
        <button type="submit">GO!</button>
      </label>
      <fieldset className="methods">
        <button type="button" id="get">
          GET
        </button>
        <button type="button" id="post">
          POST
        </button>
        <button type="button" id="put">
          PUT
        </button>
        <button type="button" id="delete">
          DELETE
        </button>
      </fieldset>
    </form>
  );
}
