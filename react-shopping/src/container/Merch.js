import React from "react";

function Merch(props) {
  const { item } = props;
  console.log(item);
  return (
    <div>
      <div class="shop-item">
        <span class="shop-item-title">{item.title}</span>
        <img class="shop-item-image" src="img/img/Shirt.png" />
        <div class="shop-item-details">
          <span class="shop-item-price">{item.price}</span>
          <button class="btn btn-primary shop-item-button" type="button">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Merch;
