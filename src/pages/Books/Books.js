import React from 'react';
import { connect } from 'react-redux';
import '../../Components/Navbar/navbar.css';

import Pagination from '../../Components/Pagination/pagination.js';
import Loading from '../../Components/Loading/loading';
import { fetchBooks } from '../../store/book/reducer/book.reducer';
import BookFields from './BookFields';
import { Fragment } from 'react';

class Books extends React.Component {
  componentDidMount() {
    const { fetchBooksBegin } = this.props;
    fetchBooksBegin();
  }

  render() {
    const { loading, booksList, currentPage, postPerPage, maxPageNumber } =
      this.props.booksState;

    //console.log(booksList.length);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOffirstPage = indexOfLastPost - postPerPage;
    const currentData = booksList.slice(indexOffirstPage, indexOfLastPost);
    const paginate = (pageNum) => this.setState({ currentPage: pageNum });
    const nextPage = () => this.setState({ currentPage: currentPage + 1 });
    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    return (
      <Fragment>
        {loading && <Loading />}
        {!loading && (
          <div className="AllBooks">
            <div className="container">
              <BookFields data={currentData} />
              <Pagination
                postPerPage={postPerPage}
                paginate={paginate}
                nextPage={nextPage}
                prevPage={prevPage}
                maxPageNumber={maxPageNumber}
                currentPage={currentPage}
              />
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  booksState: state.bookReducer,
});

const mapDispatchToProps = { fetchBooksBegin: fetchBooks };

export default connect(mapStateToProps, mapDispatchToProps)(Books);
