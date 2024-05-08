import React from "react";
import { Link } from "react-router-dom";

function Chips() {
    return (
        <div>
            <h1>You Selected Chips</h1>
            <img 
                src="https://64.media.tumblr.com/0254bf0f98b79d74ef5a092c2350170b/0f31cafc80c04a94-eb/s400x600/046d8f8bef86fc9365c67958c4be78b66f895b17.gifv"
                alt="Chips Vending Gif"
                />
            <p><Link to="/">Choose Again</Link> </p>
        </div>
    )
}

export default Chips;