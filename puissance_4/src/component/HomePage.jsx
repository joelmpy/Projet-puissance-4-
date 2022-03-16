import React from "react";
import image1 from "../image/puissance-4.jpg"
import image2 from "../image/mode_emploi.jpg"
import { Link } from 'react-router-dom'
import "./HomePage.css"

class HomePage extends React.Component {

    render() {
        return (
            <>


                <div className="home" >

                    <div className='color'>
                        <h1 className="flash">puissance 4 </h1>
                    </div>


                    <div className="container1">


                        <div className="card">
                            <div className="card-image">
                                <img src={image1} alt="" />
                            </div>
                            <h2>Game</h2>
                            <p>C'est l'heure de jouer</p>
                            <Link to="/Grid">Commencer le Game !</Link>
                        </div>

                        <div className="card">
                            <div className="card-image">
                                <img src={image2} alt="" />
                            </div>
                            <h2>Instruction</h2>
                            <p>L'apprentissage avant la pratique </p>

                            <Link to="/Instruction">Page d'Instruction</Link>
                        </div>



                    </div>

                    <div className="container">

                        <div className="row">
                            <div className="col-12">
                                <div className="wrapper">
                                    <div className="texte">la team dev :</div>
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


                            </div>
                        </div>

                    </div>

                </div>

            </>
        )
    }
}

export default HomePage