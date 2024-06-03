import React,{useEffect,useState} from 'react'

const ApiCall = () => {

    const [data,setData]=useState([])

    const getData=async()=>{
        let result= await fetch('https://jsonplaceholder.typicode.com/users');
        result= await result.json();
        setData(result)
    }

    useEffect(()=>{
        getData()
    },[])

    console.log(data)
  return (
    <div>
      <h1>list of users</h1>
      <ul>
      {
          data.map((item)=>{
             return  <li key={item.name}>{item.name}</li>
          })
      }
      </ul>
    </div>
  )
}

export default ApiCall
