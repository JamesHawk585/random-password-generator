import React, { useState } from "react";

const RandomPasswordGeneratorCard = () => {
    const[password, setPassword] = useState();

  const getRandomPassword = () => setPassword(Math.random().toString(36).slice(2));
  ;

  function handleGetRandomPassword() {
    getRandomPassword();
  }

  return (
    <>
      <h1>RandomPasswordGeneratorCard</h1>
      <h2>{password}</h2>
      <button onClick={() => handleGetRandomPassword()}>New Password</button>
    </>
  );
};

export default RandomPasswordGeneratorCard;
