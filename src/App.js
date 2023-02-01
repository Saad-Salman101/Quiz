import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import QuestionState from './context/notes/QuestionState';
import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import StudentPortal from './components/StudentPortal';

function App() {
  return (
    <>
      <QuestionState>
        <Router>
          <Navbar />
          <Alert message="This is amazing React course" />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/studentportal">
                <StudentPortal/>
              </Route>
            </Switch>
          </div>
        </Router>
      </QuestionState>
    </>
  );
}

export default App;
