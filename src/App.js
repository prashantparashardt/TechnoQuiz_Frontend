import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './Header';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Category from './Category';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/categories" component={Category} exact />
            <Route path="/Signin" component={SignIn} exact />
            <Route path="/signup" component={SignUp} exact />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
