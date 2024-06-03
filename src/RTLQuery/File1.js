import React from 'react'
import '@testing-library/jest-dom/extend-expect'; 
const File1 = () => {
  return (
    <div>
      <input type="text" value='hello' disabled/>
      <button disabled>click me</button>
      <div element-id="override-id">testing with test id</div>
    </div>
  )
}

export default File1
