import React ,{useState}from 'react'

const Component2 = () => {
    const [data,setData]=useState('');
  return (
    <div>
        <input id='verma' type="text" placeholder="onchange testing" name='username' value={data} onChange={(e)=>setData(e.target.value)}/>
    </div>
  )
}

export default Component2
