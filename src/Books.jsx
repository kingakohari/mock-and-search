import React, {useState} from 'react'
import Button from '@mui/material/Button';


function Books(props) {

    const [details, setDetails] = useState(false)

    return (
        <div className='books'>
            <h2>{props.title}</h2>
            {details &&
            <>
            <p>by {props.author}</p>
            <p>published in {props.year}</p>
            </>
            }
            <Button variant="outlined" onClick={() => {
                setDetails(!details)                                    //mindig az alapállapot ellenkezője (toggle, previous state megfordítása)
            }}>{details ? "Hide details" : "Show details"}</Button>
        </div>
       
      ); 
}

export default Books