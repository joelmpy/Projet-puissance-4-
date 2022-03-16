import React from "react";
import './Grid.css'


class Grid extends React.Component {
    constructor() {
        super()

    }


    render() {
        return (

            <div className="home2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center text-uppercase">Le jeu commence</h1>
                            <span className="material-icons icon1">person</span>
                            <span className="material-icons icon2">person_outline</span>
                            <div className='tableau'>
                                <p>Jouer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Grid