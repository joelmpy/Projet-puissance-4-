import React from 'react'
import './instruction.css'
import image3 from '../image/emploi.png'



class Instruction extends React.Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <section className='info-game'>
                        <div className='row'>
                            <div className='col-12 p-3'>
                                <h2>Règle du puissance 4</h2>
                                <img src={image3}></img>
                                <p>Découvrez la règle du puissance 4, jeu de société à la fois simple mais demandant un minimum de stratégie. Le but étant de faire aligner 4 jetons de sa propre couleur.</p>

                            </div>
                        </div>
                    </section>
                </div>

                <section className='info'>

                    <div className='sommaire'>
                        <h3>Sommaire</h3>

                    </div>
                    <div className='info-jeu'>
                        <h4>Pour Jouer au puissance 4, Il vous faut :</h4>
                        <ul>
                            <li>Le plateau du jeu et ses 42 emplacements pour jetons répartis en 6 lignes et 7 colonnes</li>
                            <li>42 jetons de 2 couleurs différentes</li>
                            <li>Être 2 joueurs</li>
                        </ul>
                    <h4>Commencer une partie de puissance 4 :</h4>
            <p>Pour commencer une partie de puissance 4, on désigne le premier joueur. Celui­ci met un de ses jetons de couleur dans l’une des colonnes de son choix. Le jeton tombe alors en bas de la colonne.
            Le deuxième joueur insère à son tour son jeton, de l’autre couleur dans la colonne de son choix. Et ainsi de suite jusqu’à obtenir une rangée de 4 jetons de même couleur.
            </p>
                    </div>
                </section>


            </div>

        )
    }
}

export default Instruction