import '../../stylesheets/main.scss'

export default function Response(props) {
  return (
    <section className="response">
      <h2>Response</h2>
      {props.loading ?
        <h3>Loading...</h3> :
        (props.data?.headers && props.data.headers['content-type'].includes('image') ? 
          <img className="response-box" src={props.data.request.responseURL} alt='requested'/> : 
          <pre className="response-box">
            {props.data ? JSON.stringify(props.data, null, 2) : null}
          </pre>)
    }
    </section>
  );
}
