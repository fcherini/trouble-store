import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InitialPage from "./components/home-page/InitialPage";
import ShopPage from "./components/shop-page/ShopPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={InitialPage} />
        <Route path="/shop" exact component={ShopPage} />
      </Switch>
    </Router>
  );
}

export default App;
