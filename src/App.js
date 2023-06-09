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

      <body>
        <div className="container">
          <div className="slotcontainer">
            <div className="slot">
              <div className="symbols" id="slot1Symbols"></div>
            </div>

            <div className="slot">
              <div className="symbols" id="slot2Symbols"></div>
            </div>

            <div className="slot">
              <div className="symbols" id="slot3Symbols"></div>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            {/* <button onClick={spin}>Spin</button>
            <button onClick={reset}>Reset</button> */}
          </div>
        </div>
      </body>
      <Machine/>
      
    </div>
  );
}

export default App;
