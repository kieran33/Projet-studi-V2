import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact</li>
                </NavLink>
                <NavLink to="/politique-confidentialite">
                    <li>Politique de confidentialité</li>
                </NavLink>
                <NavLink to="/mentions-legales">
                    <li>Mentions légales</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;