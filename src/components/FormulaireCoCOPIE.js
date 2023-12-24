{/*import React from 'react';
import { useState } from 'react';

const FormulaireCo = () => {

    const [pseudo, setPseudo] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [estConnecte, setEstConnecte] = useState(false);

    const handleConnexion = (e) => {
        e.preventDefault();
        console.log('Connexion avec :', pseudo, motDePasse);
        setEstConnecte(true); // L'utilisateur est considéré comme connecté
    };

    return (
        <div>
            {!estConnecte ? (
                <div className="conteneur-principal">
                    <div className="formulaire-connexion">
                        <form onSubmit={handleConnexion}>
                            <input type="text" name="pseudo" id="pseudo" placeholder="Votre pseudo" value={pseudo} onChange={e => setPseudo(e.target.value)} />
                            <input type="password" name="motdepasse" id="motdepasse" placeholder="Votre mot de passe" value={motDePasse} onChange={e => setMotDePasse(e.target.value)} />
                            <button type="submit">Se connecter</button>
                        </form>
                        <button type="submit">S'inscrire</button>
                    </div>
                </div>
            ) : (<p className="nom-personne">Connecté en tant que : <b>{pseudo}</b></p>)}
        </div>
    );
};

export default FormulaireCo;*/}