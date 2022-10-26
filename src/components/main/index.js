import { useState, useEffect } from 'react';

import axios from 'axios';

import Form from "../form";
import Results from "../results";
import HistoryPanel from '../history-panel';
import './main.scss'

export default function Main(props) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [request, setRequest] = useState({
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon/ditto',
  })

  function callApi(params){
    setRequest(params);
  }



  useEffect(() => {
    async function fetchData(apiRequest){
      setLoading(true)
      // Just using this to test out the loading indicator. Remove this in the next phase.
      await new Promise(resolve => setTimeout(resolve, 1500));
      try {
        
        let parsedBody;
        console.log(apiRequest.body)
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
      <HistoryPanel method={request.method} url={request.url}/>
      <div className='dynamic-panels'>
        <Form handleApiCall={callApi}/>
        {loading ? <h2>loading</h2> :
          <Results data={response}/>
        }
      </div>
    </main>
  )
}