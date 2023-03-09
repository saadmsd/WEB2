import React, { useState, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);

  function handleClick() {
    setCount(count + 1);
    console.log(`Compteur : ${count + 1}, Première chaîne : ${input1Ref.current.value}, Deuxième chaîne : ${input2Ref.current.value}`);
  }

  return (
    <div>
      <label htmlFor="input1">Première chaîne :</label>
      <input type="text" id="input1" ref={input1Ref} />
      <label htmlFor="input2">Deuxième chaîne :</label>
      <input type="text" id="input2" ref={input2Ref} />
      <button onClick={handleClick}>Incrémenter</button>
    </div>
  );
}

export default Counter;
