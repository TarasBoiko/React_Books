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

    const pagesSlice =
      currentPage + 5 < pageNumbers.length
        ? pageNumbers.slice(currentPage, currentPage + maxPageNumber)
        : pageNumbers.slice(currentPage - 10, pageNumbers.length);

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

export default Pagination;
