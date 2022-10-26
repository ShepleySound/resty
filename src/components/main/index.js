import { useState } from 'react';

import Form from "../form";
import Results from "../results";
import QueryPanel from '../query-panel';
import './main.scss'

export default function Main(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({})

  function callApi(params){
    const data = {
      count: 2,
      results: [
        { name: "fake thing 1", url: "http://fakethings.com/1" },
        { name: "fake thing 2", url: "http://fakethings.com/2" },
      ],
    };
    setRequestParams(params)
    setData(data)
  }
  return (
    <main>
      <QueryPanel method={requestParams.method} url={requestParams.url}/>
      <Form handleApiCall={callApi}/>
      <Results data={data}/>
    </main>
  )
}