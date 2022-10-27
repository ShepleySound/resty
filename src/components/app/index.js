import { useState, useEffect } from 'react';

import axios from 'axios';

import Request from "../request";
import Response from "../response";
import HistoryPanel from '../history-panel';
import '../../stylesheets/main.scss'

export default function App(props) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [requestHistory, setRequestHistory] = useState([]);
  const [request, setRequest] = useState({
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon/ditto',
  })

  function callApi(params){
    setRequestHistory(oldHistory => [...oldHistory, params])
    setRequest(params);
  }



  useEffect(() => {
    async function fetchData(apiRequest){
      setLoading(true)
      // Just using this to test out the loading indicator. Remove this in the next phase.
      await new Promise(resolve => setTimeout(resolve, 1500));
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
      fetchData(request)
        .catch(console.error)
    }
    
    return () => {
      ignore = true;
    }
  }, [request])

  return (
    <main>
      <HistoryPanel requestHistory={requestHistory}/>
      <div className='dynamic-panels'>
        <Request handleApiCall={callApi}/>
        <Response data={response} loading={loading}/>
      </div>
    </main>
  )
}