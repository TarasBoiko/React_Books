import React from "react";
import client from "../../../api/client";

class ContactsDetail extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    client.get(`Users/${params.id}`).then((response) => {
      this.setState({ data: response.data });
    });
  }
  render() {
    const {
      match: { params },
    } = this.props;

    const { data } = this.state;

    return (
      <div>
        <h1> Contacts with id: {params.id}</h1>
        <p>
          ID: <b>{data.id}</b>
        </p>
        <p>
          USER NAME: <b>{data.userName}</b>
        </p>
      </div>
    );
  }
}

export default ContactsDetail;
