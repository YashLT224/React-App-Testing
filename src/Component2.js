import React ,{useState}from 'react'

const Component2 = () => {
    const [data,setData]=useState('');
    const [buttondata,setButtonData]=useState('');
  return (
    <div>
        <input id='verma' type="text" placeholder="onchange testing" name='username' value={data} onChange={(e)=>setData(e.target.value)}/>
    <button onClick={()=>setButtonData('on click test')}>Update Data</button>
    <h1>{buttondata}</h1>
    </div>
  )
}

export default Component2
