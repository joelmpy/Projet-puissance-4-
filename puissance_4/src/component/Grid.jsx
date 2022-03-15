import React from "react";
import './Grid.css'


class Grid extends React.Component {
    constructor() {
        super()

    }


    render() {
        return (
            <div className="container">
                <h1>Salut</h1>
                <span className="material-icons">person</span>
                <span className="material-icons">person_outline</span>
            </div>
        )
    }
}


export default Grid