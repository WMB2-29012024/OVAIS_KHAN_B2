import React from "react";

const Card = () => {
  const randomNumber = Math.floor(Math.random() * 100);

if(randomNumber%2){
    return <h1 className="card-container">This Is odd Number{randomNumber}</h1>
}else{
    return <h1 className="card-container">This Is even Number{randomNumber}</h1>
}
}
export default Card ;