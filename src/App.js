import React, { useState, useEffect } from "react"
import Character from "./Character"
import LoadingMask from "./LoadingMask";
import Subscription from "./Subscription";



function App() {

  const[loading, setLoading] = useState(false)
  const[character, setCharacter] = useState([])
 

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
        <Subscription />
    </footer>
      
  </main>

  ); 
}

export default App;
