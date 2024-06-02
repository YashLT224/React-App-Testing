import React from 'react'

const PropsTesting = ({name,testFunction}) => {
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={testFunction}></button>
    </div>
  )
}

export default PropsTesting
