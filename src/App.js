import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import { useState } from "react";
import productList from "./products";

function App() {
  const [products, setProducts] = useState(productList);

  return (
    <Router>
    <div className="App">
    <Navbar />
    <div className="content">
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/shop'>
          <Shop products={products}/>
        </Route>
        <Route path='/cart'>
          <Cart />
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
