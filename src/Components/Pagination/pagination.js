import React, { Component } from 'react';

export class Pagination extends Component {
  onPrevPageHandler = (event) => {
    event.preventDefault();
    this.props.prevPage();
  };

  onNextPageHandler = (event) => {
    event.preventDefault();
    this.props.nextPage();
  };

  render() {
    const { postPerPage, totalBooks, paginate, maxPageNumber, currentPage } =
      this.props;

    const paginationItemCount = Math.ceil(totalBooks / postPerPage);
    const pageNumbers = [...new Array(paginationItemCount)].map(
      (_, index) => index
    );
    // console.log('currentPage: ', currentPage);
    // console.log({ pageNumbers });

    const pagesSlice =
      currentPage + 5 < pageNumbers.length
        ? pageNumbers.slice(currentPage, currentPage + maxPageNumber)
        : pageNumbers.slice(currentPage + maxPageNumber, pageNumbers.length);

    console.log('pagesSlice: ', pageNumbers.length);

    const renderListPagesNumber = pagesSlice.map((number) => {
      return (
        <li className="page-item" key={number}>
          <button
            onClick={() => paginate(number)}
            className={`page-link ${
              number === currentPage ? 'current-page' : ''
            }`}
          >
            {number}
          </button>
        </li>
      );
    });

    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button
              className="btn btn-primary"
              onClick={this.onPrevPageHandler}
            >
              Previous
            </button>
          </li>

          {renderListPagesNumber}

          <li className="page-item">
            <button
              className="btn btn-primary"
              onClick={this.onNextPageHandler}
              disabled={currentPage === pageNumbers.length}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
