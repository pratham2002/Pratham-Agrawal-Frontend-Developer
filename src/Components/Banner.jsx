import React from "react";
import image from "../utilities/images/capsule-1.jpg";
export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Product Tagline</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          voluptatem quod! Animi, consectetur atque incidunt excepturi
          voluptatibus hic saepe recusandae dignissimos quis obcaecati!
        </p>
      </div>
      <div className="banner-image">
        <img src={image} alt="Product" />
      </div>
    </div>
  );
}
