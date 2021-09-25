import React, { Component } from 'react';

import { getBooks } from '../../api/books';
import '../../Components/Navbar/navbar.css';

import Pagination from '../../Components/Pagination/pagination.js';
import Loading from '../../Components/Loading/loading';
import BookFields from './BookFields';
import { Fragment } from 'react';

class Books extends Component {
  state = {
    loading: true,
    data: [],
    error: false,
    currentPage: 1,
    postPerPage: 3,
    maxPageNumber: 10,
  };

  componentDidMount() {
    getBooks()
      .then((data) => {
        this.setState({ data, loading: false });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { data, loading, currentPage, postPerPage, maxPageNumber } =
      this.state;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOffirstPage = indexOfLastPost - postPerPage;
    const currentData = data.slice(indexOffirstPage, indexOfLastPost);

    const paginate = (pageNum) => this.setState({ currentPage: pageNum });
    const nextPage = () => this.setState({ currentPage: currentPage + 1 });
    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    if (loading) {
      return (
        <h2>
          <Loading />
        </h2>
      );
    }
    return (
      <div className="AllBooks">
        <Fragment>
          <div className="container">
            <BookFields data={currentData} loading={loading} />
            <Pagination
              postPerPage={postPerPage}
              totalBooks={data.length}
              paginate={paginate}
              nextPage={nextPage}
              prevPage={prevPage}
              maxPageNumber={maxPageNumber}
              currentPage={currentPage}
            />
          </div>
        </Fragment>
      </div>
    );
  }
}

export default Books;
