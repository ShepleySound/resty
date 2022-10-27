import '../../stylesheets/main.scss'
import CodeEditor from '@uiw/react-textarea-code-editor';
import {useState} from "react"

export default function Request(props) {

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
    <section className='request'>
      <h2>Request</h2>
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
              className="code-editor"
              value={body}
              language="json"
              placeholder="JSON"
              onChange={(e) => setBody(e.target.value)}
              style={{
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
              }}
            />
        </div>
      </form>
    </section>
  );
}