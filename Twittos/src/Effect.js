import React, { useState } from 'react';

function MyPage() {
  const [firstString, setFirstString] = useState("");
  const [secondString, setSecondString] = useState("");

  const handleFirstStringChange = (event) => {
    const input = event.target.value;
    setFirstString(input);
    console.log(`Première chaîne : ${input} et deuxième chaîne : ${secondString}`);
  };

  const handleSecondStringChange = (event) => {
    const input = event.target.value;
    setSecondString(input);
    console.log(`Première chaîne : ${firstString} et deuxième chaîne : ${input}`);
  };

  return (
    <div>
      <form>
        <label>Première chaîne :<input type="text" value={firstString} onChange={handleFirstStringChange} /></label>
        <br />
        <label>Deuxième chaîne :<input type="text" value={secondString} onChange={handleSecondStringChange} /></label>
      </form>
    </div>
  );
}

export default MyPage;
