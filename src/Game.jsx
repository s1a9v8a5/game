import React, {useState} from 'react';
import Board from "./Board";
import {calculateWinner} from "./helper";
import Popup from "./Popup";
import Counter from "./Counter";


const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
    const [textInputOne, setTextInputOne] = useState("");
    const [textInputTwo, setTextInputTwo] = useState("");
    const [count, setCount] = useState(0)
    const winner = calculateWinner(board);

    const counterPlayerOne = () => {
        return setCount(count + 1)
    }
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


    const handleClick = (index) => {
        const boardCopy = [...board]
        // Определить был ли клик по ячейке или игра законченна
        if (winner || boardCopy[index]) return
        // Определить чей ход Х ? О
        boardCopy[index] = xIsNext ? 'X' : 'O'
        // Обновить наш стейт
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return (
            <button className="start__btn" onClick={() => setBoard(Array(9).fill(null))}> Clear board </button>
        )
    }
    const newGame = () => {
        return (<button className="start__btn" onClick={() => location.reload()}>New game</button>

        )
    }


    return (
        <div className="wrapper">
            <Popup
                print={print}
                isOpen={isOpen}

            />
            <Counter
                textInputOne={textInputOne}
                textInputTwo={textInputTwo}
                count={count}
                counterPlayerOne={counterPlayerOne}

            />
            {startNewGame()}
            {newGame()}
            <Board squares={board} click={handleClick}/>
            <p className="game__info">
                {winner ? 'Победитель ' + (winner === "X" ? textInputOne : textInputTwo) : 'Сейчас ходит ' + (xIsNext ? textInputOne : textInputTwo)}
            </p>
        </div>
    )
}

export default Game