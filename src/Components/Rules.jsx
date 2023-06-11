import React, { useState } from 'react';
import spin from '../images/spin.png';

function Rules() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
  
  function Modal() {
    return (
      <div className="modalRules">
        <div className="rulesContent">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Rules</h2>
          <ul>
            <li>
                <div className="slotcontainer small">
                <img src={spin} height={35} alt="button spin" />
                <span>-1 coin 🪙</span>
                </div>
            </li>
            <li>
                <div className="slotcontainer small">
                    <div className="slot">
                        <div className="symbols">
                            🍒
                        </div>
                    </div>
                    <div className="slot">
                        <div className="symbols">
                            🍒
                        </div>
                    </div>
                    <div className="slot">
                        <div className="symbols">
                            🍒
                        </div>
                    </div>
                    <span>50 coins 🪙</span>
                </div>
            </li>
            <li>
                <div className="slotcontainer small">
                    <div className="slot">
                        <div className="symbols">
                            🍒
                        </div>
                    </div>
                    <div className="slot">
                        <div className="symbols">
                            🍒
                        </div>
                    </div>
                    <div className="slot">
                        <div className="symbols">
                            
                        </div>
                    </div>
                    <span>40 coins 🪙</span>
                </div>
            </li>
            <li>
                <div className="slotcontainer small">
                    <div className="slot">
                        <div className="symbols">
                            🍎
                        </div>
                    </div>
                    <div className="slot">
                        <div className="symbols">
                            🍎
                        </div>
                    </div>
                    <div className="slot">
                        <div className="symbols">
                            🍎
                        </div>
                    </div>
                    <span>20 coins 🪙</span>
                </div>
            </li>
            <li>
                <div className="slotcontainer small">
                    <div className="slot">
                        <div className="symbols">
                            🍎
                        </div>
                    </div>
                    <div className="slot">
                        <div className="symbols">
                            🍎
                        </div>
                    </div>
                    <div className="slot">
                        <div className="symbols">
                            
                        </div>
                    </div>
                    <span>10 coins 🪙</span>
                </div>
            </li>
            <li>
                <div className="slotcontainer small">
                    <div className="slot">
                        <div className="symbols">
                            🍌
                        </div>
                    </div>
                    <div className="slot">
                        <div className="symbols">
                            🍌
                        </div>
                    </div>
                    <div className="slot">
                        <div className="symbols">
                            🍌
                        </div>
                    </div>
                    <span>15 coins 🪙</span>
                </div>
            </li>
            <li>
                <div className="slotcontainer small">
                    <div className="slot">
                        <div className="symbols">
                            🍌
                        </div>
                    </div>
                    <div className="slot">
                        <div className="symbols">
                            🍌
                        </div>
                    </div>
                    <div className="slot">
                        <div className="symbols">
                            
                        </div>
                    </div>
                    <span>5 coins 🪙</span>
                </div>
            </li>
            <li>
                <div className="slotcontainer small">
                    <div className="slot">
                        <div className="symbols">
                            🍋
                        </div>
                    </div>
                    <div className="slot">
                        <div className="symbols">
                            🍋
                        </div>
                    </div>
                    <div className="slot">
                        <div className="symbols">
                            🍋
                        </div>
                    </div>
                    <span>3 coins 🪙</span>
                </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div>
      <button onClick={openModal} className='btnRules'>Rules</button>
      {showModal && <Modal />}
    </div>
  );
}

export default Rules;