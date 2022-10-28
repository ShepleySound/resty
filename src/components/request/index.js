import '../../stylesheets/main.scss'
import CodeEditor from '@uiw/react-textarea-code-editor';
import {useEffect, useState} from "react"


export default function Request(props) {
  const [method, setMethod] = useState(props.currentRequest.method)
  const [url, setUrl] = useState(props.currentRequest.url)
  const [body, setBody] = useState(props.currentRequest.body)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      body: body,
    };

    props.handleApiCall(formData);
  };

  useEffect( () => {
    setMethod(props.currentRequest.method);
    setUrl(props.currentRequest.url);
    setBody(props.currentRequest.body);
  }, [props.currentRequest])


  return (
    <section className='request'>
      <h2>Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <select value={method} onChange={(e) => setMethod(e.target.value)} name="method" id="method-select">
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="delete">DELETE</option>
          </select>
          <input value={url} name="url" onChange={(e) => setUrl(e.target.value)} type="text" data-testid="url-input" required/>
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
