import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class BookFields extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        {data.map((post) => (
          <div key={post.id} className="alert alert-primary">
            <h3 className="alert-heading">{post.title}</h3>
            <p>{post.description}</p>

            <Link to={`/books/${post.id}`}>View detail</Link>
          </div>
        ))}
      </div>
    );
  }
}
export default BookFields;
