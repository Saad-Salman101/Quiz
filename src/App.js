import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import QuestionState from './context/question/QuestionState';
import TeacherState from './context/TeacherState';
// import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import StudentPortal from './components/StudentPortal';

function App() {
  return (
    <>
      <QuestionState>
        <TeacherState>
        <Router>
          <Navbar />

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
        </TeacherState>
      </QuestionState>
    </>
  );
}

export default App;
