import react from 'react';
import './App.css';
import Header from './Header';
import Slider from './Slider';
import { Route, Switch , Link, Redirect } from 'react-router-dom';
import Pricing from './Pricing';

function App() {
  return (
    <div>
      <Header/>
      <Slider/>
      <Switch>
         <Route path="/p" exact component={Pricing}/>
      </Switch>
    </div>
      ); 
}

export default App;