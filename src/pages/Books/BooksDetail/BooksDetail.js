import React, { Component } from "react";
import { getBookDetails } from "../../../api/books";

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
    return (
      <div>
        {!loading && (
          <div>
            <h1>{data.id}</h1>
            <h1>{data.title}</h1>
          </div>
        )}
        {loading && <div>Loading...</div>}
      </div>
    );
  }
}

export default BooksDetail;
