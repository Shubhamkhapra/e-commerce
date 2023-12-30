import { Switch, Route } from 'react-router-dom';

import HomePage from './components/home-page.jsx';
import NotFound from './components/not-found.jsx';
import Shop from './components/pages/shop/shop.jsx';
import SingleProduct from './components/single-product/single-product';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path = '*' component ={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
