import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => setData(res.data), setLoading(false))
  })

  return (
    <div className="App">
      <div className={`data-list ${(loading) ? 'loading' : ''}`}>
        <ul>
          {(data.map((v, i) => {
            return (
              <li key={i}>{v.title}</li>
            )
          }))}
        </ul>
      </div>
    </div>
  );
}

