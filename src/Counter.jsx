import React from 'react';

const Counter = ({textInputOne, textInputTwo, count, counterPlayerOne}) => {

    let a = "Player 1 :";
    let b = "Player 2 :";
    return (
        <div className="counter">
            <span className="score">Score</span>
            <span className="firstName">  {textInputOne} : {count} </span>
            <span className="secondName">  {textInputTwo} : {count} </span>

        </div>
    )
};


export default Counter;