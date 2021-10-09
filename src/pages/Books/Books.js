import React from 'react';
import { useSelector } from 'react-redux';
import '../../Components/Navbar/navbar.css';

import Pagination from '../../Components/Pagination/pagination.js';
import Loading from '../../Components/Loading/loading';
import BookFields from './BookFields';
import { Fragment } from 'react';

function Books() {
  const postBook = useSelector((state) => state.bookReducer);

  const { booksList, loading, currentPage, postPerPage, maxPageNumber } =
    postBook;

  console.log({ booksList, loading });

  const indexOfLastPost = currentPage * postPerPage;
  const indexOffirstPage = indexOfLastPost - postPerPage;
  const currentData = booksList.slice(indexOffirstPage, indexOfLastPost);

  const paginate = (pageNum) => this.setState({ currentPage: pageNum });
  const nextPage = () => this.setState({ currentPage: currentPage + 1 });
  const prevPage = () => this.setState({ currentPage: currentPage - 1 });

  console.log('Current data ', currentData);

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
          <BookFields data={currentData} />
          <Pagination
            postPerPage={postPerPage}
            totalBooks={booksList.length}
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

export default Books;
