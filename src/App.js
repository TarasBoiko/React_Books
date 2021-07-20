import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import BooksDetail from './pages/Books/BooksDetail';
import Contacts from './pages/Contacts';
import Feedback from './pages/Feedback/Feedback';
import ContactsDetail from './pages/Contacts/ContactsDetail';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/books" component={Books} exact />
          <Route path="/books/:id" component={BooksDetail} exact />
          <Route path="/contacts" component={Contacts} exact />
          <Route path="/contacts/:id" component={ContactsDetail}>
            <ContactsDetail />
          </Route>
          <Route path="/feedback" component={Feedback} exact />
        </Switch>
      </Router>
    </>
  );
};

export default App;
