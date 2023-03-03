'use client'

import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from '@firebase/firestore'
import { db} from '../../firebase'

function FormBox() {

    const [name, setName] = useState('')
    const [text, setText] = useState('')

    const collRef = collection(db, 'comments')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addDoc(collRef, { name, text, createdAt: serverTimestamp() })
        setName('')
        setText('')
    }

  return (
    <div className='form-container'>
        <form className='formike' onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="vardas" 
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="tekstas"
            name='text'
            value={text}
            onChange={e => setText(e.target.value)}
             />
            <button className='form-button'>komentuok</button>
        </form>
    </div>
  )
}

export default FormBox