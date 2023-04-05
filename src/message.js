import React from 'react'

export default function Message(props) {
    return (
        <div className="message">
            <h1>{props.message}</h1>
        </div>
    )
}
