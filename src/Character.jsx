import React, {useState} from 'react'
import Button from '@mui/material/Button';


function Character(props) {

    const [details, setDetails] = useState(false)

    return (
        <div className='characters'>
            <h2>{props.name}</h2>
            {details &&
            <>
            <p>{props.details}</p>
            </>
            }
            <Button variant="outlined" onClick={() => {
                setDetails(!details)                                    //mindig az alapállapot ellenkezője (toggle, previous state megfordítása)
            }}>{details ? "Show less" : "Show more"}</Button>
        </div>
       
      ); 
}

export default Character