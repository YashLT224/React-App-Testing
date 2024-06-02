import React, { useEffect, useState } from "react";
import User from "./PropsTesting";
const Assertion2 = () => {
  const [data, setData] = useState(false);
  const [buttonData, setButtonData] = useState('');
  const [inputData,setInputData]=useState('')
  let login = true;

  useEffect(() => {
    setTimeout(() => {
      alert("nds");
      setData(true);
    }, 1000);
  }, []);
  return (
    <div>
      {login ? <button>logout</button> : <button>login</button>}
      {data ? <h1>data found</h1> : <h1>no data found</h1>}

      <h1 id="testid">hello yash</h1>

      <div>
        Hello world
        <p>lorum</p>
        <p>ipsum</p>
      </div>
<h1>{buttonData}</h1>
      <button onClick={()=>setButtonData('hello')}>clickme</button>
      <h1>{inputData}</h1>
      <input type="text" placeholder='enter name' onChange={(e)=>setInputData(e.target.value)}/>
      <User name='yash'/>
    </div>
  );
};

export default Assertion2;
