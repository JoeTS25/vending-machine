import React from "react";
import './Vending.css';
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <div>
            <h1>Welcome to the Online Vending Machine!</h1>
            <img className="image"
                src="https://bjs.scene7.com/is/image/bjs/166466?$bjs-Zoom$"
                alt="Vending Machine"
            />
            <p className="links">
                <Link to="/pastries">Pastries</Link> <br />
                <Link to="/chips">Chips</Link> <br />
                <Link to="/candy">Candy</Link> 
                </p>
            

        </div>
    )
}

export default VendingMachine;