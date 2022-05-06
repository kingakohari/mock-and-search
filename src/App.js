import React, { useState, useEffect } from "react"
import Books from "./Books"
import LoadingMask from "./LoadingMask";
import Button from '@mui/material/Button';
import Textfield from '@mui/material/TextField'

function App() {

  const[loading, setLoading] = useState(false)
  const[books, setBooks] = useState([])
  const[input, setInput] = useState("")
  const[sort, setSort] = useState("desc")

  async function fetchBooks(){
    const response = await fetch("http://www.kingatest.com/v1/api/books")
    const resJSON = await response.json()

    console.log(resJSON);

    setBooks(resJSON)
    setLoading(false)
    
  }

  useEffect( () => {
    setLoading(true)
    fetchBooks()
  }, [])
 
  function sortBooks(){
    setBooks([...books.sort((a,b) => sort === "desc" ? b.year-a.year : a.year - b.year)])
    setSort(sort === "desc" ? "asc" : "desc")
  }

   return (
    <div className='books'>
      {loading ? <LoadingMask /> : 
      <>
        <Textfield placeholder='Search within titles' value={input} onChange={ ({target}) => setInput(target.value) } />
        <Button variant="contained" style={{height:50}} onClick={sortBooks}>Go</Button>
        
        {books.map(({title,author,year}) => 
        title.toLowerCase().includes(input.toLowerCase()) && <Books key={title} title={title} author={author} year={year} />)}
      </>
      }
    </div>
  ); 
}

export default App;
