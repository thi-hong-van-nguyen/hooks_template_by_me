
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import AddForm from './components/AddForm';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div style={{border: 'dotted black 5px', padding: '20px'}}>
        <Link to='/signup' style={{ padding: '20px' }}>Sign up</Link>
        <Link to='/add-item'>Create a selling item</Link>
      </div>


      <Switch>
        <Route path='/signup'>
          <SignupForm />
        </Route>

        <Route path='/add-item'>
          <AddForm />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
