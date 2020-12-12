import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Store from "./container/Store";
import Cart from "./container/Cart";
import About from "./container/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import storeData from "./StoreData";
import Contact from "./container/Contact";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const setCartData = (item) => {
    const isAlreadyInCart = cartItems.find((obj) => obj.title == item.title);

    if (!isAlreadyInCart) {
      setCartItems([...cartItems, item]);
    }
  };

  const removecartData = (index) => {
    const newCartItems = cartItems.filter((item, idx) => idx != index);
    setCartItems(newCartItems);
  };

  const emptycartData = () => {
    //AND operator
    cartItems.length > 0 && setCartItems([]);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Route path={"/store"}>
          <Store storeData={storeData} setCartData={setCartData} />
        </Route>
        <Route path={"/cart"}>
          <Cart
            items={cartItems}
            removecartData={removecartData}
            emptycartData={emptycartData}
          />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
