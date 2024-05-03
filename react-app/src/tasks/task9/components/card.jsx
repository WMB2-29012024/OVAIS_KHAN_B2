import React from "react";

const Card = () => {
  const randomNumber = Math.floor(Math.random() * 100);

return(
    <div className="card-container">
     <h1>Card Title</h1>
    {!(randomNumber%2)&&<h3>this is Even{randomNumber}</h3>}
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod doloremque mollitia. Suscipit cum neque nesciunt consequatur fugiat veniam delectus deleniti ullam asperiores repellat optio, officia aut blanditiis dolorem beatae corrupti nobis! Quo, numquam!</p>
    </div>
)
}
export default Card ;