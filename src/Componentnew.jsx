import React, { useEffect } from 'react'
import { useState } from 'react'



export default function Componentnew(props) {
    
    const [count, setCount] = useState(5);
    useEffect(() => {
        console.log("Componentnew mounted or count changed");
    }, [count]);

  return (
    <>
    <div>Componentnew</div>
   <h1>{props.name}</h1>
   <h1>{props.description}</h1>
   <h2>Count: {count}</h2>
    <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </>
    
  )
}


//