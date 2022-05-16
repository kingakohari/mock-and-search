import React, {useState} from 'react'
import LoadingMask from './LoadingMask'
import Textfield from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Subscription = () => {

    const [valid, setValid] = useState(false)
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [done, setDone] = useState(false)
    const [hide, setHide] = useState(false)
   

    const handleInputChange = (e) => {
        setInput(e.target.value)
        input.includes('@') && input.includes('.') ? setValid(true) : setValid(false)
    }
 
    async function postSubscribeData() {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'email': input })
        }
    
        const response = await fetch("https://demoapi.com/api/series/newsletter", requestOptions)
        const resJSON = await response.json()
        setLoading(false)
        setDone(true)
         setTimeout(() => 
           setHide(true) , 5000) 
        console.log(resJSON);
        console.log('Subscribed');

    }

    function requestHandler(e){
        e.preventDefault() //form elemen belül kell
        console.log('Button clicked')
        setLoading(true)
        postSubscribeData()
    }


    return (
    <>
        {hide ? null : 
        
        loading && !done ? <LoadingMask /> : 
        done ? <h2>Subscribed</h2> :
        <form>
            <h2>Subscribe to our newsletter</h2>
            <Textfield placeholder="Email address" variant="filled" value={input} onChange={(e) => {handleInputChange(e)}} />
            {valid ? 
            <Button variant="contained" style={{height:50}} onClick={requestHandler}>Go</Button> 
            : <Button variant="contained" style={{height:50}} disabled>Go</Button>}
        </form>}
    </>
    
    )
        
}

export default Subscription