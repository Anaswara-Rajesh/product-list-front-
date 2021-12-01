import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login/login';
import AdLogin from './components/login/AdLogin';
import AdRegister from './components/AdRegister';
import Register from './components/register/register';
import Home from './components/home/home';
import AddProduct from './components/AddProduct';
function App() {

  const [ user, setLoginUser] = useState({})
  const [ admin, setLoginAdmin] = useState({})
  return (
    <div className="App">  
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Home /> : <Login setLoginUser={setLoginUser} />
            }
            </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
            </Route>
            <Route path="/ad_login">
            <AdLogin setLoginAdmin={setLoginAdmin} />
            </Route>
          <Route path="/register">
            <Register />
            </Route>
            <Route path="/ad_register">
            <AdRegister />
            </Route>
            <Route path="/products/add" component={AddProduct}/>
            </Switch>
            </Router>
            </div>
  );
}

export default App;
