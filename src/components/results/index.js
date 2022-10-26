import "./results.scss";

export default function Results(props) {
  return (
    <section className="results">
      <h2>Results</h2>
      {props.data?.headers && props.data.headers['content-type'].includes('image') ? 
        <img className="results-box" src={props.data.request.responseURL} alt='requested'/> : 
        <pre className="results-box">
          {props.data ? JSON.stringify(props.data, null, 2) : null}
        </pre>
      }
      {/* <pre className="results-box">
        {props.data ? JSON.stringify(props.data, undefined, 2) : null}
      </pre> */}
    </section>
  );
}
