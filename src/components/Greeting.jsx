import React, { useState } from "react";

function Greeting() {
  const [value, setValue] = useState("");

  return (
    <div>
     {value.length > 0 ? (
       <h1>Привіт, {value}!</h1>
     ) : (
       <h1>Напиши своє ім'я</h1>
     )}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Напиши своє ім'я"
      />
    </div>
  );
}

export default Greeting;
