import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter,Routes} from 'react-router-dom'
import App from './App';
import Users from './users';
import Contact from './contact';
import Notfound  from './notfound';
import Peliculas  from './peliculas';
import reportWebVitals from './reportWebVitals';
const routing = (
  
  <div>
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/usuarios">Users</Link>
        </li>
        <li>
          <Link to="/contacto">Contact</Link>
        </li>
        <li>
          <Link to="/peliculas">Peliculas</Link>
        </li>

      </ul>
        <Routes>
          <Route exact path="/" element={<App />} />
          < Route path="/usuarios/:id" element={<Users />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element = {<Notfound />} />
          <Route path="/peliculas" element = {<Peliculas />} />
        </Routes>
      </BrowserRouter>
    </div>  
  
  )
  

ReactDOM.render(routing,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
