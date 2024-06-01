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

      <button>click me</button>
      <button>click me</button>

      <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
      </select>
      <label htmlFor='student'>studentname</label>
      <input id='student' type='text' value='anil' />


      <label htmlFor='skills'>skills</label>
      <input id='skills' type='checkbox' defaultChecked= {true} />
   

   <label htmlFor='a1'>a1</label>
      <input id='a1' type='text'  defaultValue={'a1'} />
      <label htmlFor='a2'>a1</label>
      <input id='a2' type='text'  defaultValue={'a2'} />
      <label htmlFor='a3'>a1</label>
      <input id='a3' type='text' defaultValue={'a3'} />
   
   
   
    </div>
  )
}

export default File1
