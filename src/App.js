import React, { useEffect, useState } from "react";
import axios from 'axios';

import Nasa from './Nasa';
import "./App.css";

async function fetchToNasa () {
  try {
    const result =  await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    return result.data
  }
  catch(err) {
    console.log(err)
  }
  // axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
 
}

function App() {
  const [nasaPicInfo, setNasaPicInfo] = useState({date: '', explanation: '', url: '', title: '', media_type: ''}) 

  useEffect(() => {
    fetchToNasa()
      .then(response => setNasaPicInfo(response));
  }, [])

  return (
    <div className="App">
      <Nasa {...nasaPicInfo}/>
    </div>
  );
}

export default App;
