import React from 'react'

import img from "./error.gif"

function ErrorMessage() {
  return (
  //  <img src={process.env.PUBLIC_URL + '/error.gif'}/>
  <img src={img} alt="Error"/>
  )
}

export default ErrorMessage;
