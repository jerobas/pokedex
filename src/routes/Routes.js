import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Pokemon from '../pages/pokemon/Pokemon';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" element={<Home />} />;
                <Route path="/:pokemon/:id" element={<Pokemon />} />;
            </Switch>
        </Router>
    )
}
