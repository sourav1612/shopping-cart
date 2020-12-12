import React from "react";

function Album(props) {
  const { item, setCartData } = props;

  const addToCart = () => {
    setCartData(item);
  };
  return (
    <div class="shop-item">
      <span class="shop-item-title">{item.title}</span>
      <img class="shop-item-image" src={item.img} />
      <div class="shop-item-details">
        <span class="shop-item-price">{item.price}</span>
        <button
          class="btn btn-primary shop-item-button"
          type="button"
          onClick={addToCart}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default Album;
