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
    console.log(data);
    return (
      <div className="">
        {!loading && (
          <div>
            <div>
              <h5>{data.title}</h5>
              <p>{data.description}</p>
              <p>{data.excerpt}</p>
              <small>{data.publishDate}</small>
            </div>
          </div>
        )}
        {loading && <Loading />}
      </div>
    );
  }
}

export default BooksDetail;
