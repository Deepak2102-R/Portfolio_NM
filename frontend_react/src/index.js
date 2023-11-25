import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './index.css';

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App />);
