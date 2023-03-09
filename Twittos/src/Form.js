import React, { useState } from 'react';

function UnixPermissions() {
  const [permissions, setPermissions] = useState({ r: false, w: false, x: false });
  const [code, setCode] = useState(0);

  function handleChange(event) {
    const { name, checked } = event.target;
    setPermissions(prevPermissions => ({ ...prevPermissions, [name]: checked }));
  }

  function handleClick() {
    let code = 0;
    if (permissions.r) {
      code += 4;
    }
    if (permissions.w) {
      code += 2;
    }
    if (permissions.x) {
      code += 1;
    }
    setCode(code);
  }

  return (
    <div>
      <div>
        <label><input type="checkbox" name="r" checked={permissions.r} onChange={handleChange} />Read</label>
      </div>
      <div>
        <label><input type="checkbox" name="w" checked={permissions.w} onChange={handleChange} />Write</label>
      </div>
      <div>
        <label><input type="checkbox" name="x" checked={permissions.x} onChange={handleChange} />Execute</label>
      </div>
      <div>
        <button onClick={handleClick}>Calculer le code</button>
      </div>
      <div>
        Code numérique : {code}
      </div>
    </div>
  );
}

export default UnixPermissions;
