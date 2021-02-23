import React from 'react';

const Counter = () => {

    let a = "Player 1 :";
    let b = "Player 2 :";
    return (
        <div className="counter">
            {/*<span className="score">Score</span>*/}
            <span className="firstName">{a} {printNameOne}</span>
            <span className="secondName">{b} {printNameTwo}</span>

        </div>
)
};


export default Counter;