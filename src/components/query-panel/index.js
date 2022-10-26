import './query-panel.scss'

function Query(props) {
  return (
    <div>
      <span className="query-method">{props.method}</span>
      <span className="query-url">{props.url}</span>
    </div>
  )
}

export default function QueryPanel(props) {
  return (
    <>
      <section className="query-panel">
        <Query method={props.method} url={props.url}/>
        <Query method={props.method} url={props.url}/>
        <Query method={props.method} url={props.url}/>
      </section>
    </>
  )
}