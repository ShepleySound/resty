import { useState, useEffect } from 'react';

import axios from 'axios';

import Request from "../request";
import Response from "../response";
import HistoryPanel from '../history-panel';
import '../../stylesheets/main.scss'

export default function App() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [requestHistory, setRequestHistory] = useState([]);
  const [currentRequest, setCurrentRequest] = useState({
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon/ditto',
    body: '',
  })

  function sendNewRequest(params){
    setRequestHistory(oldHistory => [...oldHistory, params])
    setCurrentRequest(params);
  }

  function recallRequest(params) {
    setCurrentRequest(params);
  }


  useEffect(() => {
    async function fetchData(apiRequest){
      setLoading(true)
      try {
        
        let parsedBody;
        if (apiRequest.body) {
          try {
            parsedBody = JSON.parse(apiRequest.body)
          } catch (err) {
            console.error(err)
          }
        }

        const apiResponse = await axios({
          method: apiRequest.method,
          url: apiRequest.url,
          data: parsedBody
        })

        setLoading(false)
        setResponse(apiResponse)

      } catch (err) {
        setLoading(false)
        setResponse(err)
      }
    }
    let ignore = false;

    setResponse(null);
    if (!ignore) {
      fetchData(currentRequest)
        .catch(console.error)
    }
    
    return () => {
      ignore = true;
    }
  }, [currentRequest])

  return (
    <main>
      <HistoryPanel requestHistory={requestHistory} recallRequest={recallRequest}/>
      <div className='dynamic-panels'>
        <Request currentRequest={currentRequest} handleApiCall={sendNewRequest}/>
        <Response data={response} loading={loading}/>
      </div>
    </main>
  )
}