import {useState} from "react";
import React from 'react';

const Popup = ({print, isOpen}) => {


    let a = "Player 1 :";
    let b = "Player 2 :";

    if (!isOpen) {
        return null
    }
    setTimeout("document.querySelector('.popup').style.display='inline-block'", 500);

    return (<>

            <div className="popup">
                <h2 className="enter_name">Enter the names of the players!</h2>

                <input type="text" className="text player1" placeholder="name player 1" size="20"/>
                <input type="text" className="text player2" placeholder="name player 2" size="20"/>
                <button className="send" onClick={print}>OK</button>

            </div>
        </>

    )
}
export default Popup;