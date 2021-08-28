import { Fragment } from 'react';
import { Component } from 'react';
import ModalContainer from '../../Store/modal/ModalContainer';
import modal from '../../Store/modal/ModalContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <ModalContainer />
        </Fragment>
      </div>
    );
  }
}

export default Home;
