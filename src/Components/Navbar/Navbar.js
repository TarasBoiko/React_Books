import React from 'react';
import { Link } from 'react-router-dom';
//import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo" alt="logo">
        {' '}
        LOGO{' '}
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/" className="home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="contacts">
            Contacts
          </Link>
          {/* <ul>
                  <li>
                    <Link to="/contacts/1" className="author">Author</Link>
                  </li>
                  <li>
                    <Link to="/contacts/2" className="director">Director</Link>
                  </li>
                  <li>
                    <Link to="/contacts/3" className="developer" >Developer</Link>
                  </li>
                </ul>  */}
        </li>
        <li>
          <Link to="/books" className="books">
            Books
          </Link>
        </li>
        <li>
          <Link to="/feedback" className="feedback">
            Feedback
          </Link>
        </li>
        <li>
          <Link to="/AppTodo" className="todo">
            Todo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
