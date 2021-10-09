import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { fetchBooks } from '../../store/book/reducer/book.reducer';
import { useDispatch, useSelector } from 'react-redux';

// import { Link } from 'react-router-dom';

function BookFields() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Select Store states
  const postBook = useSelector((state) => state.bookReducer);

  const { booksList } = postBook;
  return (
    <div>
      <Fragment>
        {booksList.map((post) => (
          <div key={post.id} className="alert alert-primary">
            <h3 className="alert-heading">{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </Fragment>
    </div>
  );
}

export default BookFields;
