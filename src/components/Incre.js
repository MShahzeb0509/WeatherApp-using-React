import React, { useEffect, useState} from 'react'

const Incre = () => {
    const [count,setCount]= useState(0);

    useEffect(()=>{
      document.title=`(${count}) WhatsApp`
    })
  return (
    <div>
    <h1>Counter App {new Date().toLocaleTimeString()}</h1>
    <div>
        <h1>{count}</h1>
        <button className="btn" onClick={()=>setCount( count + 1 )}>incr</button>
        <button  className="btn" onClick={()=>setCount(0)}>Reset</button>
        <button className="btn"  onClick={()=>(count > 0 ? setCount(count - 1 ) : setCount(0) )}>decr</button>
    </div>
    </div>
  )
}

export default Incre;
