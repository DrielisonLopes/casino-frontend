import React, { useEffect, useRef, useState } from 'react';
import {runMachine} from '../services/api'

const SLOT_SYMBOLS = [
  ['❓', '🍒', '🍎', '🍌', '🍋'],
  ['❓', '🍒', '🍎', '🍌', '🍋'],
  ['❓', '🍒', '🍎', '🍌', '🍋']
];

const Machine = () => {
  const symbolsRefs = useRef([]);
  const slotsRefs = useRef([]);
  const [spun, setSpun] = useState(false);
  const [displayedSymbols, setDisplayedSymbols] = useState([]);

  const [data, setData] = useState(null);
  const [coins, setCoins] = useState(20);

  const getData = async () => {
    const result = await runMachine(coins);
    console.log(result)
    setCoins(result.coins)
    setData(result);
  };

  useEffect(() => {
    if (spun) {
      reset();
      spinSlots();
    }
  }, [spun]);

  useEffect(() => {
    setDisplayedSymbols(generateInitialSymbols());
  }, []);

  // const createSymbolElement = (symbol) => {
  //   return (
  //     <div className="symbol">{symbol}</div>
  //   );
  // };

  const reset = () => {
    slotsRefs.current.forEach(slot => {
      const symbols = slot?.current?.firstChild;
      if (symbols) {
        symbols.style.transition = 'none';
        symbols.style.top = '0';
        symbols.style.transition = '';
      }
    });
  };

  const generateInitialSymbols = () => {
    const initialSymbols = SLOT_SYMBOLS.map(row => row[0]);
    return initialSymbols;
  };

  const spinSlots = () => {
    let completedSlots = 0;

    slotsRefs.current.forEach((slot, index) => {
      const symbols = symbolsRefs.current[index]?.current;
      const symbolHeight = symbols?.firstChild?.clientHeight;
      const symbolCount = symbols?.childElementCount;

      if (symbols && symbolHeight && symbolCount) {
        symbols.innerHTML = '';

        // symbols.appendChild(createSymbolElement('❓'));

        // for (let i = 0; i < 3; i++) {
        //   SLOT_SYMBOLS[index].forEach(symbol => {
        //     symbols.appendChild(createSymbolElement(symbol));
        //   });
        // }

        const totalDistance = symbolCount * symbolHeight;
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

  const spin = () => {
    if (spun) {
      reset();
    }
    setSpun(true);
  };

  return (
    <div className="container">
      <div className="slotcontainer">
      {SLOT_SYMBOLS.map((row, rowIndex) => (
        <div key={rowIndex} ref={ref => slotsRefs.current[rowIndex] = ref} className="slot">
            <div ref={ref => symbolsRefs.current[rowIndex] = ref} className="symbols">
              {displayedSymbols[rowIndex]}
            </div>
          </div>
      ))}
      </div>
      
      <div className='containercoins'>
        <span className='coins'>{coins}</span>
      </div>
      {/* {JSON.stringify(data)} */}
      {data?.result1}
      {data?.result2}
      {data?.result3}
      <button onClick={getData}>Spin</button>
    </div>
  );
};

export default Machine;
