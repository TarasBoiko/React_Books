import React, { Fragment } from 'react';

// import { Link } from 'react-router-dom';

function BookFields() {
  const { booksList } = this.props.booksState;
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
