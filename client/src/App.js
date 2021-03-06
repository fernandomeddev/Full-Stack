import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import Task  from './pages/Tasks';

function App() {

  return (
    <div className="App">
      <Router>
      <div className="navbar">
        <Link to="/"> Home</Link>
        <Link to="/createtask"> Create Tasks </Link>
      </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createtask" exact component={CreateTask} />
          <Route path="/task/:id" exact component={Task} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
