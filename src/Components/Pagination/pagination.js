import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../store/book/reducer/book.reducer';

export class Pagination extends Component {
  componentDidMount() {
    const { fetchBooksBegin } = this.props;
    fetchBooksBegin();
    console.log(fetchBooksBegin);
  }

  onPrevPageHandler = (event) => {
    event.preventDefault();
    this.props.prevPage();
  };

  onNextPageHandler = (event) => {
    event.preventDefault();
    this.props.nextPage();
  };

  render() {
    const { postPerPage, paginate, maxPageNumber, currentPage, booksList } =
      this.props.booksState;

    const totalBooks = booksList.length;

    console.log(this.props.booksState);

    const paginationItemCount = Math.ceil(totalBooks / postPerPage);
    console.log(paginationItemCount);
    const pageNumbers = [...new Array(paginationItemCount)].map(
      (_, index) => index
    );

    const pagesSlice =
      currentPage + 5 < pageNumbers.length
        ? pageNumbers.slice(currentPage, currentPage + maxPageNumber)
        : pageNumbers.slice(currentPage - 10, pageNumbers.length);
    console.log(pagesSlice);
    // console.log(
    //   'pagesSlice: ',
    //   pageNumbers.slice(currentPage + maxPageNumber, pageNumbers.length)
    // );

    const renderListPagesNumber = pagesSlice.map((number) => {
      return (
        <li className="page-item" key={number}>
          <button
            onClick={() => paginate(number)}
            className={`page-link ${number === currentPage ? 'active' : ''}`}
          >
            {number}
          </button>
        </li>
      );
    });
    console.log(renderListPagesNumber);
    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button
              className="btn btn-primary ms - 2"
              onClick={() => paginate(1)}
            >
              First page
            </button>
          </li>
          <li className="page-item">
            <button
              className="btn btn-primary"
              disabled={currentPage === 1}
              onClick={this.onPrevPageHandler}
            >
              Previous
            </button>
          </li>

          {renderListPagesNumber}

          <li className="page-item">
            <button
              className="btn btn-primary ms-2"
              onClick={this.onNextPageHandler}
              disabled={currentPage === pageNumbers.length - 1}
            >
              Next
            </button>
          </li>
          <li className="page-item">
            <button
              className="btn btn-primary ms-2"
              onClick={() => paginate(pageNumbers.length - 1)}
            >
              Last page
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  booksState: state.bookReducer,
});

const mapDispatchToProps = { fetchBooksBegin: fetchBooks };

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
