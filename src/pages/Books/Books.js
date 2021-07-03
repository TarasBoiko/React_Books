import React, { Component } from "react";


import { getBooks } from "../../api/books";

import Pagination from "../../Components/Pagination/pagination.js";
import BookFields from "./BookFields";

class Books extends Component {
  state = {
    loading: true,
    data: [],
    error: false,
    currentPage: 1,
    postPerPage: 3, 
    minPageNumber: 1,
    maxPageNumber: 5
  };

  componentDidMount() {
    getBooks()
      .then((data) => {
        this.setState({ data, loading: false });
      })
      .catch((error) => console.log(error));


  }

  render() {
    const { data, loading, currentPage, postPerPage } = this.state;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOffirstPage = indexOfLastPost - postPerPage;
    const currentData = data.slice(indexOffirstPage, indexOfLastPost); 

    const paginate = pageNum => this.setState({currentPage: pageNum});
    const nextPage = () => this.setState({currentPage: currentPage + 1});
    const prevPage = () => this.setState({currentPage: currentPage - 1});
    
  
    return (
      <div className="container">
        <BookFields data={currentData} loading={loading} />
        <Pagination postPerPage={postPerPage} totalBooks={data.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
      </div>
    );
  }
}

export default Books;
