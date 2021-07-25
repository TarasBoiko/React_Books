import React, { Component } from 'react';
import { getBookDetails } from '../../../api/books';
import Loading from '../../../Components/Loading/loading';
import '../../../Components/Navbar/navbar.css';

class BooksDetail extends Component {
  state = {
    loading: true,
    data: {},
    error: false,
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    getBookDetails(params.id)
      .then((bookData) => {
        this.setState({ data: bookData, loading: false });
      })
      .catch((error) => console.log(error));
  }
  render() {
    const { data, loading } = this.state;
    return (
      <div className="">
        {!loading && (
          <div className="card text-center card border-dark mb-3">
            <div className="card-body">
              <h5 className="card-header">{data.title}</h5>
              <p className="card-title">{data.description}</p>
              <p className="card-text">{data.excerpt}</p>
              <small className="text-muted">{data.publishDate}</small>
            </div>
          </div>
        )}
        {loading && <Loading />}
      </div>
    );
  }
}

export default BooksDetail;
