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
  // Set the states for the app
  const [products] = useState(productList);

  const [cartItems, setCartItems] = useState([])

  const [totalQuantity, setTotalQuantity] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  // Shows the states to help me define the logic in changeState, may delete later
  useEffect(() => {
    console.log(cartItems);
    console.log(totalPrice);
  }, [cartItems, totalPrice]);

  // This is the main function where the states are updated
  const changeState = (id, substractItem = false, deleteItem = false) => {
    console.log(id);
    // Changes the string id into number
    const numId = parseInt(id);
    let price = products[numId].price;
    // This is to help with checking if there's already a similar item in the cartItems
    let noSimilarItem = true;
    for (let i = 0; i < cartItems.length; i++) {
      // This searches the item in cartItems with the index of id 
      if (cartItems[i].index === numId) {
        noSimilarItem = false;
        let quantity = cartItems[i].quantity;
        // If changeState is called from the minus button in quantity adjuster it goes here
        if (substractItem === true) {
          if (quantity > 1) {
            setCartItems([
              ...cartItems.slice(0, i),
              {
                index: cartItems[i].index,
                quantity: quantity - 1
              },
              ...cartItems.slice(i+1)
            ]);
          // If quantity is 1 then delete the item object from cartItem
          } else {
            setCartItems([
              ...cartItems.slice(0, i),
              ...cartItems.slice(i+1)
            ]);
          };
          setTotalQuantity(totalQuantity-1);
          setTotalPrice(totalPrice-price);
        // If changeState is called from a delete button, it goes here
        } else if (deleteItem === true) {
          setCartItems([
            ...cartItems.slice(0, i),
            ...cartItems.slice(i+1)
          ]);
          setTotalQuantity(totalQuantity-quantity);
          setTotalPrice(totalPrice-(price * quantity));
        // Else it is probably an addition to quantity, so it goes here 
        } else {
          setCartItems([
            ...cartItems.slice(0, i),
            {
              index: cartItems[i].index,
              quantity: quantity + 1
            },
            ...cartItems.slice(i+1)
          ]);
          setTotalQuantity(totalQuantity+1);
          setTotalPrice(totalPrice+price);
        }
      }
    }
    // If no item with the same id is found in cartItem, a new object is created here
    if (noSimilarItem === true) {
      setCartItems([
        ...cartItems,
        {
          index: numId,
          quantity: 1,
        },
      ]);
      setTotalQuantity(totalQuantity+1);
      setTotalPrice(totalPrice+price);
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar total={totalQuantity}/>
        <div className="content">
          <Switch>
            <Route path='/shopping-cart/' exact>
              <Home />
            </Route>
            <Route path='/shopping-cart/shop' exact>
              <Shop products={products}/>
            </Route>
            <Route path='/shopping-cart/shop/:id'>
              <ProductDetails products={products} changeState={changeState}/>
            </Route>
            <Route path='/shopping-cart/cart'>
              <Cart 
              products={products} 
              items={cartItems} 
              total={totalPrice} 
              changeState={changeState}
              />
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
