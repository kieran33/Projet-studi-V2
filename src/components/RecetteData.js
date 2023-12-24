import React from 'react';
import { useState } from 'react';

const RecetteData = () => {
    const [titre, setTitre] = useState(['Pizza regina', 'Salade césar', 'Poisson papillote']);
    const [ingredients, setIngredients] = useState([['jambon, fromage, tomate'], ['salade, tomate, noix'], ['collin d\'Alaska, citron']]);
    const [regime, setRegime] = useState(['sans lactose', 'végétarien', 'sans sel']);

    return (
        <div id='listePlat'>
            <div className='Plat'>
                <p>Titre : {titre[0]}</p>
                <p>Ingrédients : {ingredients[0]}</p>
                <p>Type de régime : {regime[0]}</p>
            </div>

            <div className='Plat'>
                <p>Titre : {titre[1]}</p>
                <p>Ingrédients : {ingredients[1]}</p>
                <p>Type de régime : {regime[1]}</p>
            </div>

            <div className='Plat'>
                <p>Titre : {titre[2]}</p>
                <p>Ingrédients : {ingredients[2]}</p>
                <p>Type de régime : {regime[2]}</p>
            </div>
        </div>
    );
};

export default RecetteData;