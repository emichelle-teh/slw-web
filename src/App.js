import React, {memo} from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' exact component={AboutUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default memo(App);
