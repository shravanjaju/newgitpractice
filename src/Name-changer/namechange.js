import './namechange.css'
import Form from '../Form-New/form'
import {Fragment, useState} from 'react'

export default function NameChanger () {

    let [name , setName] = useState('')
    setName=(Form.name)


    return (
       <Fragment>
        <div className='namech'>
            <h1>Hi My Name is {name}</h1>
            </div>
       </Fragment>
    )
    }