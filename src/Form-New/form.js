import { Fragment, useState } from 'react'
import './form.css'

export default function Form () {
    const [name , setName] = useState('')

    function handleSubmision () {
        setName({name})
    }



    return (
       <Fragment>
         <input
            className='inputTag'
            placeholder='Enter Your Name here...'

        />
        
        <button onClick={handleSubmision}>
            Submit
        </button>
       </Fragment>

        
    )

}