import React from 'react'
import { Link } from 'react-router-dom'
import './instruction.css'
import image3 from '../image/emploi.png'



class Instruction extends React.Component {
    render() {
        return (
            <div className='home1'>
                <div className='container game1'>
                    <section className='info-game'>
                        <h2>Règle du puissance 4</h2>
                        <div className='row p-3'>
                            <div className='col-8 infox '>
                                <img src={image3}></img>
                                <p>Découvrez la règle du puissance 4, jeu de société à la fois simple mais demandant un minimum de stratégie. Le but étant de faire aligner 4 jetons de sa propre couleur.</p>
                            </div>
                        </div>
                    </section>
                </div>


                <div className='container '>
                    <section className='info'>

                        <div className='sommaire'>
                            <h3>Sommaire</h3>
                        </div>

                        <div className='info-jeu'>
                            <h4>Pour Jouer au puissance 4, Il vous faut :</h4>
                            <ul>
                                <li>Le plateau du jeu et ses 42 emplacements pour jetons répartis en 6 lignes et 7 colonnes</li>
                                <li>21 pions rouges</li>
                                <li>21 pions jaune</li>
                                <li>Être 2 joueurs</li>
                            </ul>
                            <h4>Commencer une partie de puissance 4 :</h4>
                            <p>Pour commencer une partie de puissance 4, on désigne le premier joueur. Celui ­ci met un de ses jetons de couleur dans l’une des colonnes de son choix. Le jeton tombe alors en bas de la colonne.
                                Le deuxième joueur insère à son tour son jeton, de l’autre couleur dans la colonne de son choix. Et ainsi de suite jusqu’à obtenir une rangée de 4 jetons de même couleur.
                            </p>
                            <h4>Comment gagner une partie de puissance 4 :</h4>
                            <p>Pour gagner une partie de puissance 4, il suffit d’être le premier à aligner 4 jetons de sa couleur horizontalement, verticalement et diagonalement.
                                Si lors d’une partie, tous les jetons sont joués sans qu’il y est d’alignement de jetons, la partie est déclaré nulle.</p>
                        </div>
                    </section>

                    
                </div>
                <div>

                
                <Link className='glow-on-hover' to="/Grid">Commencer le game !</Link>
                <Link className='glow-on-hover1' to="/">Acceuil</Link>
                </div>
                
            </div>

        )
    }
}

export default Instruction