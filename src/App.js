import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import { useState, useEffect } from "react";
import productList from "./products";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [products, setProducts] = useState(productList);

  const [cartItems, setCartItems] = useState([])

  const [totalQuantity, setTotalQuantity] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log(cartItems)
  }, [cartItems]
  )

  const changeState = (id, substractItem = false, deleteItem = false) => {
    console.log(id);
    const numId = parseInt(id);
    let quantity = 1;
    let noSimilarItem = true;
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].index === numId) {
          noSimilarItem = false;
          quantity = cartItems[i].quantity;
          if (substractItem === true) {
            if (quantity > 1) {
              setCartItems([
                ...cartItems.slice(0, i),
                {
                  index: cartItems[i].index,
                  quantity: quantity - 1
                },
                ...cartItems.slice(i+1)
              ])
            } else {
              setCartItems([
                ...cartItems.slice(0, i),
                ...cartItems.slice(i+1)
              ])
            }
          } else if (deleteItem === true) {
            setCartItems([
              ...cartItems.slice(0, i),
              ...cartItems.slice(i+1)
            ])
          } else {
            setCartItems([
              ...cartItems.slice(0, i),
              {
                index: cartItems[i].index,
                quantity: quantity + 1
              },
              ...cartItems.slice(i+1)
            ])
          }
        }
      }
      if (noSimilarItem === true) {
        setCartItems([
          ...cartItems,
          {
            index: numId,
            quantity: 1,
          }
        ])
      }
      if (deleteItem === true) {
        setTotalQuantity(totalQuantity-quantity)
      } else if (substractItem === true) {
        setTotalQuantity(totalQuantity-1)
      } else {
        setTotalQuantity(totalQuantity+1);
      }
  }

  return (
    <Router>
    <div className="App">
    <Navbar total={totalQuantity}/>
    <div className="content">
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/shop' exact>
          <Shop products={products}/>
        </Route>
        <Route path='/shop/:id'>
          <ProductDetails products={products} changeState={changeState}/>
        </Route>
        <Route path='/cart'>
          <Cart products={products} items={cartItems} total={totalPrice} changeState={changeState}/>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
