import React, { useState } from "react";

function Message({ text, button }) {
  function terminal() {
    console.log("It is work?");
  }
  return (
    <>
      <p>{text}</p>
      <button onClick={terminal}>{button}</button>
    </>
  );
}

export default Message;
