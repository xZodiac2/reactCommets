import React from "react";
import ReactDOM from 'react-dom/client'
import MessagesContainer from './messangesContainer'
import './style.css'


function App() {
    return (
        <div className="container">
            <MessagesContainer />
        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#app')).render(<App />)
