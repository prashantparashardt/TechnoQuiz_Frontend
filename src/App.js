import './App.css';
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" component={Home} exact />
            {/* <Route
            path="/products"
            render={() => (
              <ProductsPage addProduct={addProductHandler} exact />
            )}
          />
          <Route path="/products/:id" component={ProductsPage} />
          <Route path="/Signin" component={Signin} exact />
          <Route path="/register" component={Register} exact /> */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
