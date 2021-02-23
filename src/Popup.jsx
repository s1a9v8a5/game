import { useState } from "react";
import React from 'react';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [textInputOne, setTextInputOne] = useState("");
    const [textInputTwo, setTextInputTwo] = useState("");

    const showPop = () => {
        setIsOpen(true)
    };
    const hidePop = () => {
        setIsOpen(false)
    };
    const printNameOne = () => {
        let nameOne = document.querySelector(".player1").value;
        setTextInputOne(nameOne)
    };
    const printNameTwo = () => {
        let nameTwo = document.querySelector(".player2").value;
        setTextInputTwo(nameTwo)
    }
    let print = () => {
        printNameOne()
        printNameTwo()
        hidePop()
    }
    let a = "Player 1 :";
    let b = "Player 2 :";

    if (!isOpen) {
        return null
    }
    setTimeout("document.querySelector('.popup').style.display='inline-block'", 2000);

    return (<>
            <div className="counter">
                <span className="score">Score</span>
                <span className="firstName">{a} {textInputOne}</span>
                <span className="secondName">{b} {textInputTwo}</span>

            </div>
            <div className="popup">
                <h2>Enter the names of the players!</h2>
                <input type="text" className="text player1" placeholder="name player 1" size="20"/>
                <input type="text" className="text player2" placeholder="name player 2" size="20"/>
                <button className="send" onClick={print}>OK</button>

            </div>
        </>

    )
}
export default Popup;