import React from "react";
import image1 from "../image/puissance-4.jpg"
import image2 from "../image/mode_emploi.jpg"
import { Link } from 'react-router-dom'
import "./HomePage.css"

class HomePage extends React.Component {

    render() {
        return (

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wrapper">
                                <div className="texte">les Developpeurs sont</div>
                                <ul className="dynamique-texte">
                                    <li>
                                        <span>Erfan</span>
                                    </li>
                                    <li>
                                        <span>Omar</span>
                                    </li>
                                    <li>
                                        <span>Joel</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 className="h2">C'est parti pour le game</h2>
                        </div>
                    </div>

                </div>

                <div className="container1">

                    <div className="card">
                        <div className="card-image">
                            <img src={image1} alt="" />
                        </div>
                        <h2>Game</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit veniam obcaecati animi velit explicabo eius iusto, molestias voluptate asperiores!</p>
                        <Link to="/Grid">Commencer le game !</Link>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={image2} alt="" />
                        </div>
                        <h2>Instruction</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit veniam obcaecati animi velit explicabo eius iusto, molestias voluptate asperiores!</p>

                        <Link to="/Instruction">lien vers la Page d'Instruction</Link>
                    </div>

                </div>

            </div>

        )
    }
}

export default HomePage