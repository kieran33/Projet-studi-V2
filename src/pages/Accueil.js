import React from 'react';
import Navigation from '../components/Navigation';
import FormulaireCo from '../components/FormulaireCo';
import RecetteData from '../components/RecetteData';
import SectionAPropos from '../components/SectionAPropos';
import SectionMesServices from '../components/SectionMesServices';
import LoginSignup from '../components/LoginSignup';

const Accueil = () => {
    return (
        <div>
            <Navigation />
            <h1>Accueil</h1>
            <FormulaireCo />
            <RecetteData />
            <SectionAPropos />
            <SectionMesServices />
        </div>
    );
};

export default Accueil;