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
    url: 'https://pokeapi.co/api/v2/pokemon/ditto'
  })

  function callApi(params){
    setRequest(params);
  }

  async function fetchData(apiRequest){
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500));
    try {
      const apiResponse = await axios({
        method: apiRequest.method,
        url: apiRequest.url,
        data: apiRequest.body,
      })
      setLoading(false)
      return apiResponse;
    } catch (err) {
      console.error(err)
      return err
    }
  }

  useEffect(() => {
    let ignore = false;

    setResponse(null);
    fetchData(request)
      .then(result => {
        if (!ignore) {
          setResponse(result)
        }
      })
      .catch(console.error)
    
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