import React, { useState } from 'react';
import Livre from './Livre';
function Main() {
    
    var dateAuj = new Date();
    var dateE = "2023-02-19";

    const [titreCollection, setTitre] = useState("");
    const [livres, setLivres] = useState([{auteur: "Hugo Victor", titre: "La Légende des siècles", emprunt: {statut: false,
        dateEmprunt:dateAuj}, cote: "HUG001"},
            {auteur: "Hugo Victor", titre: "Les Misérables", emprunt: {statut: false,
        dateEmprunt:dateAuj}, cote: "HUG002"},
            {auteur: "Zola Émile", titre: "L'Assommoir", emprunt: {statut: true, dateEmprunt:dateE}, cote:
        "ZOL001"}]);

    const handleChange = () => {
        setTitre(document.getElementById("titre").value);
    }

    const handleAjouterLivre = () => {
        setLivres(livres.push({auteur: document.getElementById("auteur").value, titre: document.getElementById("titre").value, emprunt: {statut: false,
            dateEmprunt:dateAuj}, cote: document.getElementById("cote").value}));
    }
    return  (
        <div>
          <h1>{titreCollection}</h1>
            <form onChange={handleChange}>
                <label for="titre">Titre de la collection ?</label>
                <input name="titre" id= "titre" type="text" onChange = {handleChange} />
            </form>
            <Livre livres={livres}/>
            
        </div>
    );
}

export default Main;
