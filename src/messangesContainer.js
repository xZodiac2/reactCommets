import React, { useState, useRef } from "react";
import Message from "./message";


export default function MessagesContainer() {

    const [messages, setMessages] = useState([])
    const input = useRef()
    let messageText = ''

    function setMessageText(event) {
        messageText = event.target.value
    }

    function send(event) {
        messageText.trim()
        if (event.code === 'Enter' && event.target.value !== '' && event.target.value !== '\n') {
            setMessages([
                ...messages,
                messageText
            ])
        }
        if (event.code === 'Enter') {
            event.target.value.replace('\n', '')
            event.target.value = ''
        }
    }

    return (
        <div className="messages-container">
            <div className="send">
                <textarea className="message-input" onChange={setMessageText} onKeyDown={send} ref={input}></textarea>
            </div>
            <div className="messages">
                { messages.map(messageText => <Message message={messageText} />) }
            </div>
        </div>
    )
}
