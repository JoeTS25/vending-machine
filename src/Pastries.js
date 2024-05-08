import React from "react";
import { Link } from "react-router-dom";

function Pastries() {
    return (
        <div>
            <h1>You Selected Pastries</h1>
            <img 
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2lzMHQzZXp4M2g5MjJ3MGswb2tzN3VicTdlaXhoMmRsZzNvdmxzbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CprnDw0e7u1IHOioYp/giphy.gif"
                alt="Office Gif"
                />
            <p><Link to="/">Choose Again</Link> </p>
        </div>
    )
}

export default Pastries;