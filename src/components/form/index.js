import "./form.scss";
import CodeEditor from '@uiw/react-textarea-code-editor';
import {useState} from "react"

export default function Form(props) {

  const [body, setBody] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: e.target.method.value,
      url: e.target.url.value,
      body: e.target.body.value
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
        <label htmlFor="request-body-json">
          Body (JSON)
        </label>
          <CodeEditor
            id="request-body-json"
            name="body"
            value={body}
            language="json"
            placeholder="JSON"
            onChange={(e) => setBody(e.target.value)}
            style={{
              fontSize: 12,
              backgroundColor: "#242836",
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
          {/* <textarea
            id="request-body-json"
            name="body"
            rows="8"
            cols="80"
            wrap="off">
          </textarea> */}
      </div>
    </form>
  );
}
