import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'; // Replace with your server's address and port

ReactDOM.render(<App />, document.getElementById('root'));
