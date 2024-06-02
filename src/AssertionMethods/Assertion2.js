import React from 'react'

const Assertion2 = () => {
    let login=true;
  return (
    <div>
        
        {
          login?<button>logout</button>:<button>login</button>
      }
      
    </div>
  )
}

export default Assertion2
