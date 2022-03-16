import React from "react";
import { Link } from 'react-router-dom'
import './Grid.css'

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: "red",
            player2: "yellow",
            currentPlayer: null,
            board: [],
            message: "",
            stopGame: false
        };
    }
    componentDidMount = () => {
        this.initBoard();
    }
    initBoard() {
        let board = [];
        for (let r = 0; r < 6; r++) {
            let row = [];
            for (let c = 0; c < 7; c++) { row.push("white") }
            board.push(row);
        }
        this.setState({
            board,
            currentPlayer: this.state.player1,
            stopGame: false,
            message: "Goodluck May The Best Win"
        });
    }
    play(c) {
        if (!this.state.stopGame) {
            let board = this.state.board;
            for (let r = 5; r >= 0; r--) {
                if (board[r][c] === "white") {
                    board[r][c] = this.state.currentPlayer;
                    break;
                }
            }
            let currentPlayer = this.state.currentPlayer;
            if (currentPlayer === this.state.player1) {
                currentPlayer = this.state.player2
            }
            else {
                currentPlayer = this.state.player1
            }
            this.setState({
                board,
                currentPlayer,
            });
            let result = this.check(board);
            if (result === this.state.player1) {
                this.setState({
                    board,
                    message: 'Player 1 (red) Wins ! Please Restart Game',
                    stopGame: true
                });
            }
            else if (result === this.state.player2) {
                this.setState({
                    board,
                    message: 'Player 2 (yellow) Wins ! Please Restart Game',
                    stopGame: true
                });
            }
        }
    }
    checkHorizontal(board) {
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 7; c++) {
                if (board[r][c] === this.state.currentPlayer) {
                    if (board[r][c + 1] === this.state.currentPlayer &&
                        board[r][c + 2] === this.state.currentPlayer &&
                        board[r][c + 3] === this.state.currentPlayer) {
                        return board[r][c];
                    }
                }
            }
        }
    }
    checkVertical(board) {
        for (let r = 3; r < 6; r++) {
            for (let c = 0; c < 7; c++) {
                if (board[r][c] === this.state.currentPlayer) {
                    if (board[r - 1][c] === this.state.currentPlayer &&
                        board[r - 2][c] === this.state.currentPlayer &&
                        board[r - 3][c] === this.state.currentPlayer) {
                        return board[r][c];
                    }
                }
            }
        }
    }
    checkDiagonalRight(board) {
        for (let r = 3; r < 6; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c] === this.state.currentPlayer) {
                    if (board[r - 1][c + 1] === this.state.currentPlayer &&
                        board[r - 2][c + 2] === this.state.currentPlayer &&
                        board[r - 3][c + 3] === this.state.currentPlayer) {
                        return board[r][c];
                    }
                }
            }
        }
    }
    checkDiagonalLeft(board) {
        for (let r = 3; r < 6; r++) {
            for (let c = 3; c < 7; c++) {
                if (board[r][c] === this.state.currentPlayer) {
                    if (board[r - 1][c - 1] === this.state.currentPlayer &&
                        board[r - 2][c - 2] === this.state.currentPlayer &&
                        board[r - 3][c - 3] === this.state.currentPlayer) {
                        return board[r][c];
                    }
                }
            }
        }
    }
    check(board) {
        return this.checkHorizontal(board) || this.checkVertical(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board);
    }


    render() {
        return (
            <>

                <div className="home5">


                    <div className="button" onClick={() => { this.initBoard() }}>New Game</div>
                    <table>
                        <thead></thead>
                        <tbody>
                            {this.state.board.map((row, rowIndex) => (<tr> {row.map((col, colIndex) => (
                                <td onClick={() => this.play(colIndex)}>
                                    <div className="cell">
                                        <button className={this.state.board[rowIndex][colIndex]}></button>
                                    </div>
                                </td>))}
                            </tr>))}
                        </tbody>
                    </table>
                    <p className="message">{this.state.message}</p>
                  
                    <Link className='glow-on-hover'to="/">Acceuil</Link>
                    <Link className='glow-on-hover1' to="/Instruction">Instruction</Link>
                    
                </div>
            </>
        )
    }
}

export default Grid