import React from 'react';
//import BooksDetail from './BooksDetail/BooksDetail';
import { Link } from 'react-router-dom';

export const BookItem = ({ book }) => {
  return (
    <div key={book.id} className="alert alert-primary">
      <h3 className="alert-heading">{book.title}</h3>
      <p>{book.description}</p>
      <Link to={`/books/${book.id}`}>View detail</Link>
    </div>
  );
};
