import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./containers/Header";
// import {BrowsersRouter as Router,Switch,Router} from  "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/ productId" exact component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
