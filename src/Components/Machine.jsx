import React, { useEffect, useRef, useState } from 'react';
import { runMachine } from '../services/api';
import Rules from "./Rules";
import casinoMachine from "../images/casinoMachine.png";

const SLOT_SYMBOLS = [ ['❓'], ['❓'], ['❓'] ];

const Machine = () => {
  const symbolsRefs = useRef([]);
  const slotsRefs = useRef([]);
  const [spun, setSpun] = useState(false);
  const [displayedSymbols, setDisplayedSymbols] = useState([...SLOT_SYMBOLS]);
  const [data, setData] = useState(null);
  const [coins, setCoins] = useState(20);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (spun) {
      reset();
      spinSlots();
    }
  }, [spun]);

  const reset = () => {
    slotsRefs.current.forEach(slot => {
      const symbols = slot?.current?.firstChild;
      if (symbols) {
        symbols.style.transition = 'none';
        symbols.style.transition = '';
      }
    });
  };

  const spinSlots = () => {
    let completedSlots = 0;

    slotsRefs.current.forEach((slot, index) => {
      const symbols = symbolsRefs.current[index]?.current;
      const symbolHeight = symbols?.firstChild?.clientHeight;
      const symbolCount = symbols?.childElementCount;

      if (symbols && symbolHeight && symbolCount) {
        symbols.innerHTML = '';

        const randomOffset = -Math.floor(Math.random() * (symbolCount - 1) + 1) * symbolHeight;
        symbols.style.top = `${randomOffset}px`;

        symbols.addEventListener('transitionend', () => {
          completedSlots++;
          if (completedSlots === slotsRefs.current.length) {
            logDisplayedSymbols();
          }
        }, { once: true });
      }
    });
  };
  const logDisplayedSymbols = () => {
    const symbols = slotsRefs.current.map((slot, index) => {
      const symbols = slot?.current?.firstChild;
      if (symbols) {
        const symbolIndex = Math.floor(Math.abs(parseInt(symbols.style.top, 10)) / slot.current.clientHeight) % SLOT_SYMBOLS[index].length;
        return SLOT_SYMBOLS[index][symbolIndex];
      }
      return null;
    });
    setDisplayedSymbols(symbols);
  };

  const spin = async () => {
    if (spun) {
      reset();
    }
    setSpun(true);

    const result = await runMachine(coins);
    setCoins(result.coins);
    setData(result);    
    setShowResult(true);
  };

  return (
    <div className="container">

      <img src={casinoMachine} className="tileContainer" alt="Casino Machine" />

      <div className="slotContainer">
        {SLOT_SYMBOLS.map((row, rowIndex) => (
          <div key={rowIndex} ref={ref => slotsRefs.current[rowIndex] = ref} className="slot">
            <div ref={ref => symbolsRefs.current[rowIndex] = ref} className="symbols">
              {showResult ? data && data[`result${rowIndex + 1}`] : displayedSymbols[rowIndex]}
            </div>
          </div>
        ))}
      </div>

      <div className='coinsContainer'>
        <span className='coins'>{coins}</span>
      </div>

      <div className='buttonsContainer'>
        <button onClick={spin}>Spin</button>
        <Rules/>
      </div>

    </div>
  );
};

export default Machine;
