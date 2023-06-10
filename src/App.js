import React from 'react';
import logo from './images/kanon-logo.png';
import Machine from './Components/Machine';
import { runMachine } from './services/api';

import './sass/style.css';

function App() {
  return (
    <div>
      <header className="kanon-start">
        <img src={logo} className="kanon-logo" alt="logo" />
        <button onClick={runMachine}>Play Now</button>
      </header>

      <Machine/>
      
    </div>
  );
}

export default App;
