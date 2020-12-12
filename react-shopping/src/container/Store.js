import React from "react";
import Album from "../component/Album";

function Store({ storeData, setCartData }) {
  // const storeData = props.storeData;
  // const setCartData = props.setCartData;

  // const { storeData, setCartData } = props;

  return (
    <section class="container content-section">
      <h2 class="section-header">MUSIC</h2>
      <div class="shop-items">
        {storeData.map((item) => (
          <Album item={item} setCartData={setCartData} />
        ))}
      </div>
    </section>
  );
}

export default Store;
