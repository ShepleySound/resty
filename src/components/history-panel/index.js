import '../../stylesheets/main.scss'

function Query(props) {
  return (
    <div className='query'>
      <span className="query-method">{props.method}</span>
      <span className="query-url">{props.url}</span>
    </div>
  )
}

export default function HistoryPanel(props) {



  return (
    <>
      <section className="history-panel">
        {props.method && 
        <Query method={props.method} url={props.url}/>
        }
       
      </section>
    </>
  )
}