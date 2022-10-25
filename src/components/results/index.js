import "./results.scss";

export default function Results(props) {
  return (
    <section>
      <h2>Results</h2>
      <pre className="results-box">
        {props.data ? JSON.stringify(props.data, undefined, 2) : null}
      </pre>
    </section>
  );
}
