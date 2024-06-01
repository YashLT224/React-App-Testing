import React from 'react'

const File1 = () => {
  return (
    <div>
      <button disabled>click 1</button>
      <button disabled>click 2</button>
      <label htmlFor='input1'>UserName</label>
      <input id='input1' type='text' />
      <label htmlFor='input2'>phnno</label>
      <input id='input2' type='text' />
      <div role='dummy'>dummy text</div>
    </div>
  )
}

export default File1
