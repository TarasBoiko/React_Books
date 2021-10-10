import React from 'react';
import { connect } from 'react-redux';
import '../../Components/Navbar/navbar.css';

// import Pagination from '../../Components/Pagination/pagination.js';
// import Loading from '../../Components/Loading/loading';
import { fetchBooks } from '../../store/book/reducer/book.reducer';
import BookFields from './BookFields';
import { Fragment } from 'react';

class Books extends React.Component {
  componentDidMount() {
    const { fetchBooksBegin } = this.props;
    fetchBooksBegin();
  }

  // const indexOfLastPost = currentPage * postPerPage;
  // const indexOffirstPage = indexOfLastPost - postPerPage;
  // const currentData = booksList.slice(indexOffirstPage, indexOfLastPost);

  // const paginate = (pageNum) => this.setState({ currentPage: pageNum });
  // const nextPage = () => this.setState({ currentPage: currentPage + 1 });
  // const prevPage = () => this.setState({ currentPage: currentPage - 1 });

  // console.log('Current data ', currentData);

  // if (loading) {
  //   return (
  //     <h2>
  //       <Loading />
  //     </h2>
  //   );
  // }
  render() {
    const { loading, booksList } = this.props.booksState;

    console.log(this.props.booksState);
    return (
      <div className="AllBooks">
        {/* {loading && <Loading />}
        {!loading && ( */}
          <Fragment>
            <div className="container">
              <BookFields data={booksList} />
              {/* <Pagination
            postPerPage={postPerPage}
            totalBooks={booksList.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
            maxPageNumber={maxPageNumber}
            currentPage={currentPage}
          /> */}
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  booksState: state.bookReducer,
});

const mapDispatchToProps = { fetchBooksBegin: fetchBooks };

export default connect(mapStateToProps, mapDispatchToProps)(Books);
