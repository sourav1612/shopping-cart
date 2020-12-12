import React from "react";

function Cart(props) {
  const { items, removecartData, emptycartData } = props;

  const total = items.reduce((sum, item) => {
    let num = item.price.split("$")[1];
    return sum + Number.parseInt(num);
  }, 0);

  console.log(total);

  return (
    <div>
      <section class="container content-section">
        <h2 class="section-header">CART</h2>
        <div class="cart-row">
          <span class="cart-item cart-header cart-column">ITEM</span>
          <span class="cart-price cart-header cart-column">PRICE</span>
          <span class="cart-quantity cart-header cart-column">QUANTITY</span>
        </div>
        <div class="cart-items">
          {/* ITEMS */}

          {items.map((item, index) => {
            return (
              <div style={{ display: "flex" }}>
                <div class="cart-item cart-column">
                  <img
                    class="cart-item-image"
                    src="${imgSrc}"
                    width="100"
                    height="100"
                  />
                  <span class="cart-item-title">${item.title}</span>
                </div>
                <span class="cart-price cart-column">${item.price}</span>
                <div class="cart-quantity cart-column">
                  <input class="cart-quantity-input" type="number" value="1" />
                  <button
                    class="btn btn-danger"
                    type="button"
                    onClick={() => removecartData(index)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            );
          })}

          {/* ITEMS */}
        </div>
        <div class="cart-total">
          <strong class="cart-total-title">Total</strong>
          <span class="cart-total-price">${total}</span>
        </div>
        <button class="btn btn-primary btn-purchase" type="button" onClick={() => emptycartData()}>
          PURCHASE
        </button>
      </section>
    </div>
  );
}

export default Cart;
