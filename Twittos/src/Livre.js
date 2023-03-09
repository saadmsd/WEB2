import React, { useState } from 'react';
import Main from './tme5';

function Livre(props) {
    
    return (
        <div>
            {props.livres.map((input, index) => {
                const disponibiliteStyle = {
                color: input.emprunt.statut ? 'red' : 'green',
                };
                return (
                    <ul>
                    <li>Titre : {input.titre}; Auteur : {input.auteur}; Cote : {input.cote}</li>
                    <p id="dispo" style={disponibiliteStyle}>
                        {input.emprunt.statut
                            ? 'Livre emprunté le ' + input.emprunt.dateEmprunt
                            : 'Livre disponible'}
                    </p>
                    </ul>
                );
            })
            }
            <form onClick={props.handleAjouterLivre}>
                <label for="titre">Titre du livre ?</label>
                <input name="titre" id= "titre" type="text" />
                <label for="auteur">Auteur du livre ?</label>
                <input name="auteur" id= "auteur" type="text" />
                <label for="cote">Cote du livre ?</label>
                <input name="cote" id= "cote" type="text" />
                <button onClick={props.handleAjouterLivre}>Ajouter un livre</button>
            </form>

        </div>
    );
}


export default Livre;