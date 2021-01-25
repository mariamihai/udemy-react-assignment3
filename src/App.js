import './App.css';

import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to='/users' exact>
              Users
        </NavLink>
          </li>

          <li>
            <NavLink to='/courses'>
              Courses
        </NavLink>
          </li>
        </ul>
      </nav>

      <div className="App">
        <Route path="/users" component={Users} />
        <Route path="/courses" component={Courses} />
      </div>
    </BrowserRouter>
  );
}

export default App;
