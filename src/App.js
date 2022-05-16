import React, { useState, useEffect } from "react"
import Character from "./Character"
import LoadingMask from "./LoadingMask";
import Subscription from "./Subscription";



function App() {

  const[loading, setLoading] = useState(false)
  const[character, setCharacter] = useState([])
  const[inputLoading, setInputLoading] = useState(false)
 

  async function fetchSeries(){
    const response = await fetch("https://demoapi.com/api/series/howimetyourmother")
    const resJSON = await response.json()

    console.log(resJSON);

    setCharacter(resJSON)
    setLoading(false)
    
  }

  useEffect( () => {
    setLoading(true)
    fetchSeries()
    setTimeout(() =>
      setInputLoading(true), 10000) 
  }, [])
    

   return (
  <main>
    <h1>Series Api</h1>
  
      <div className='character'>
        {loading ? <LoadingMask /> : 
      
        <>
          {character.map(({name, details}) => 
          <Character key={name} name={name} details={details} />)}
        </>
        }
      </div>

    <footer>
      {inputLoading ? <Subscription /> : false}
    </footer>
      
  </main>

  ); 
}

export default App;
