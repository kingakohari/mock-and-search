import React, {useState, useEffect} from 'react'
import LoadingMask from './LoadingMask';
import Textfield from '@mui/material/TextField'
import Button from '@mui/material/Button';

const Subscription = () => {

    const [isActive, setActive] = useState("false");
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect (() => {
        setTimeout(() => {
            setActive("false");
            setTimeout(() => setActive("true"), 10000)
        })
        
    },[])


    async function requestHandler(){

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { 'email': 'what@user.wrote' }
    }

    const response = await fetch("https://demoapi.com/api/series/newsletter", requestOptions)
    const resJSON = await response.json()
    console.log(resJSON);
    console.log("Subscribed");
    setLoading(false)
    
    }

    useEffect( () => {
        setLoading(true)
        requestHandler()
      }, [])

      useEffect (() => {
        setTimeout(() => {
            setActive("true");
            setTimeout(() => setActive("false"), 5000)
        })
        
    },[])


    return (
    <div isactive={isActive}>
        <h2>Subscribe to our newsletter</h2>
        <form loading={loading}>{(loading) => <LoadingMask />} 
            <Textfield placeholder="Email address" variant="filled" value={input} onChange={ ({target}) => setInput(target.value)} required />
            <Button variant="contained" style={{height:50}} onClick={requestHandler}>Go</Button>
        </form>
    </div>
    
    )
        
}

export default Subscription