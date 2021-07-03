import React, { Component } from "react";

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
    const {
      postPerPage,
      totalBooks,
      paginate,
      minPageNumber,
      maxPageNumber,
      currentPage,
    } = this.props;

    const paginationItemCount = Math.ceil(totalBooks / postPerPage);
    const pageNumbers = [...new Array(paginationItemCount)].map(
      (_, index) => index
    );
    console.log("currentPage: ", currentPage);
    console.log({ currentPage });

    const pagesSlice =
      currentPage + 5 < pageNumbers.length
        ? pageNumbers.slice(currentPage - 5, currentPage + maxPageNumber)
        : pageNumbers.slice(
            pageNumbers.length - maxPageNumber,
            pageNumbers.length
          );
    console.log("pagesSlice: ", pagesSlice);

    const renderListPagesNumber = pagesSlice.map((number) => {
      return (
        <li className="page-item" key={number}>
          <button onClick={() => paginate(number)} className={`page-link ${number === currentPage ? 'current-page' : ''}`}>
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
            <button className="page-link" onClick={this.onPrevPageHandler}>
              Previous
            </button>
          </li>

          {renderListPagesNumber}

          <li className="page-item">
            <button className="page-link" onClick={this.onNextPageHandler}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
