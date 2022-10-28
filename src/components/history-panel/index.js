import '../../stylesheets/main.scss'

function Query(props) {
  return (
    <div className='query' onClick={() => {
      props.recallRequest(props.request)
      }}>
      <span className="query-method">{props.request.method}</span>
      <span className="query-url">{props.request.url}</span>
    </div>
  )
}

export default function HistoryPanel(props) {



  return (
    <>
      <section className="history-panel">
        {
          props.requestHistory.map((request, index) => {
            return(
              <Query key={index} request={request} recallRequest={props.recallRequest}/>
            )
          })
        }
       
      </section>
    </>
  )
}