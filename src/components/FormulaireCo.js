import React from 'react';
import { useState } from 'react';

const FormulaireCo = () => {

    const [pseudo, setPseudo] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [email, setEmail] = useState('');
    const [regime, setRegime] = useState('');
    const [estConnecte, setEstConnecte] = useState(false);
    const [action, setAction] = useState("Se connecter")

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
                            <input type="text" name="pseudo" id="pseudo" placeholder="Votre pseudo" required value={pseudo} onChange={e => setPseudo(e.target.value)} />
                            <input type="password" name="motdepasse" id="motdepasse" placeholder="Votre mot de passe" required value={motDePasse} onChange={e => setMotDePasse(e.target.value)} />
                            {action === "Se connecter" ? <div></div>
                                : <input type="email" name="email" id="email" placeholder="Votre email" required value={email} onChange={e => setEmail(e.target.value)} />}
                            {action === "Se connecter" ? <div></div>
                                : <div className="choixRegime" >
                                    <select name="regime" required value={regime} onChange={e => setRegime(e.target.value)}>
                                        <option value="">Veuillez choisir votre type de régime</option>
                                        <option value="Végétarien">Végétarien</option>
                                        <option value="Sans lactose">Sans lactose</option>
                                        <option value="Sans sel">Sans sel</option>
                                    </select>
                                </div>}
                            <button type="submit">{action}</button>
                            <div className="connexionOuInscription">
                                {action === "Se connecter" ? <span onClick={() => { setAction("S'inscrire") }}>Je n'ai pas de compte</span>
                                    : <span onClick={() => { setAction("Se connecter") }}>J'ai déjà un compte</span>}
                            </div>
                        </form>
                    </div>
                </div>
            ) : action === "Se connecter" ? (<p className="nom-personne">Connecté en tant que : <b>{pseudo}</b></p>)
                : (<p className="nom-personne">Inscrit en tant que : <b>{pseudo}</b> votre régime est : {regime}</p>)}
        </div>
    );
};

export default FormulaireCo;