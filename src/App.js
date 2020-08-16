import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
//import MainLayout from "./index1"
import { AddProducts,ProductCategory,ProductSubCategory,PackingType,Unit} from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={() => <div>Login</div>} />
        <MainLayout>
          {/* <Route path="/" exact component={AddProducts} />
          <Route path="/ProductCategory" component={ProductCategory} />
          <Route path="/ProductSubCategory" component={ProductSubCategory} />
          <Route path="/Unit" component={Unit} />
          <Route path="/PackingType" component={PackingType} /> */}
        </MainLayout>
      </Switch>
    </Router>
  );
}

export default App;
