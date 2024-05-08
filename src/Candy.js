import React from "react";
import { Link } from "react-router-dom";

function Candy() {
    return (
        <div>
            <h1>You Selected Candy</h1>
            <img 
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExODNuZHdwOTdhNGNjeDFnNGtpOTI2ZXo4MGlhMGU0cTh3czZzZHl2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMW6nbTu8pUHZgA/giphy.gif"
                alt="Simpsons Gif"
                />
            <p><Link to="/">Choose Again</Link> </p>
        </div>
    )
}

export default Candy;