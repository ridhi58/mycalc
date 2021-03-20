import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Header from './components/Header';
import Login from './components/Login'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Display}></Route>
          <Route exact path='/Login' component={Login}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
