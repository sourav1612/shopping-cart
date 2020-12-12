import React from "react";
import Merch from "../component/Album";

function Store1({ store1Data, setCartData }) {
  return (
    <section class="container content-section">
      <h2 class="section-header">MERCH</h2>
      <div class="shop-items">
        {store1Data.map((item) => (
          <Merch item={item} setCartData={setCartData} />
        ))}
      </div>
    </section>
  );
}

export default Store1;
