import React, { useEffect, useState } from 'react'

function UseEfect() {
    const [count, setCount] = useState(0);
    const [entry, setEntry] = useState("default")
    useEffect(() => {
        alert(`you Clicker ${count} times`)
    }, [])
    
    
  return (
      <div>
          <p>
              this is counter value:{count}
          </p>
          <button onClick={() => setCount(count +1)}>
              Click me
          </button>
          <br/>
          <button onClick={() => setEntry("entry")}>setEntry { entry}</button>
    </div>
  )
}

export default UseEfect