import "./results.scss";

export default function Results(props) {
  return (
    <section className="results">
      <h2>Results</h2>
      <pre className="results-box">
        {props.data ? JSON.stringify(props.data, undefined, 2) : null}
      </pre>
    </section>
  );
}
