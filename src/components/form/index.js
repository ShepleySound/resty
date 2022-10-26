import "./form.scss";
import {useState} from "react"

export default function Form(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: e.target.method.value,
      url: e.target.url.value,
      body: JSON.parse(e.target.body.value)
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
        <button type="submit">Send</button>
      </div>
      <div className="request-body">
        <label>
          <span>Body (JSON)</span>
          <textarea
            name="body"
            rows="12"
            cols="80"
            wrap="off">
          </textarea>
        </label>
      </div>
    </form>
  );
}
