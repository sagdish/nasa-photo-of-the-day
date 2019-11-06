import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Nasa(props) {
  const { date, explanation, url, title, media_type } = props;
  return (
    <div>
      {!date ? <div>Loading ...</div> : (
        <>
          <h1>{title}</h1>
          { media_type === 'image' ? 
          <img 
            src={url}
            alt="pic from nasa"
            style={{width: 500, heigh: "auto"}} /> 
            : <p>this is video component</p> }
          <h3>{explanation}</h3>
        </>
      )}
    </div>
  )
}
