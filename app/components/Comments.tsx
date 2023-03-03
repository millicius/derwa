'use client'

import { useState, useEffect } from 'react'
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import { db } from '../../firebase'

function Comments() {

    const [comments, setComments] = useState([])

    useEffect(() => {
        const collRef = collection(db, "comments")
        const q = query(collRef, orderBy('createdAt', 'desc'))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setComments(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        })
        return unsubscribe
    }, [])
  return (
    <main className='comments-box'>
        <div>{comments.map(comment => {
        return (
            <div className='commentCard' key={comment.id}>
                <div className='commentName'>
                    <h3>{comment.name}</h3>
                </div>
                <div className='commentText'>
                    <p>{comment.text}</p>
                </div>
            </div>
        )
    })}</div>
    </main>
  )
}

export default Comments