import React, { Component } from "react";

import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/loading";

export class BookFields extends Component {
    render() {
        const { data, loading } = this.props;

        if(loading) {
            return <h2> <Loading /></h2>
        }

        return (
            <div>
                {data.map(post => (
                    <div key={post.id} className="alert alert-primary">
                        <h3 className="alert-heading">{post.title}</h3>
                        <p>{post.description}</p>
                      
                    <Link to={`/books/${post.id}`}>View detail</Link>
                    </div>
                ))}
            </div>
         
        )

    }

}
export default BookFields