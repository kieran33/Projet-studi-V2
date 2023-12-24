import React from 'react';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Error from './pages/Error';
import PolitiqueConfiden from './pages/PolitiqueConfiden';
import MentionsLegales from './pages/MentionsLegales';
import Contact from './pages/Contact';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfiden />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />

        {/*path="*" fonctionne si jamais l'url ne correspond à rien de connu*/}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;