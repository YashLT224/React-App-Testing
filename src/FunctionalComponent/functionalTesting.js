import React,{useState} from 'react'
import handleOtherMethod from './helper'
const FunctionalTesting = () => {
    const [data,setData]=useState('')
    const handleData=()=>{
        setData('hello')
    }

   
  return (
    <div>
      <button data-testid='btn1' onClick={handleData}>Update</button>
      <button onClick={handleOtherMethod}>Print</button>
      <h2>{data}</h2>
    </div>
  )
}

export default FunctionalTesting
