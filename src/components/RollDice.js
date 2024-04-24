import React, { useState } from 'react';
import "./RollDice.scss";

const RollDice = () => {
    
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
  
    const roll = () => {
      return Math.floor(Math.random() * 6) + 1;
    };


    const rollDice = () => {
        const newDice1 = roll();
        const newDice2 = roll();
        setDice1(newDice1);
        setDice2(newDice2);
        if (newDice1 === newDice2) {
          alert("شما برنده شدید");
        }
      };


    return (
        <>
        <div style={{display:"flex" , margin:"50px auto", justifyContent:"space-around", width:"50%"}}>

      <div className="dice">{dice1}</div>
      <div className="dice">{dice2}</div>
            
        </div>
        
      <button onClick={rollDice}>Roll Dice</button>
        </>
    );
};

export default RollDice;