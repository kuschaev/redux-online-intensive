// Core
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Instruments
import './theme/init';

// Intro
import App from './navigation/App';

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);
