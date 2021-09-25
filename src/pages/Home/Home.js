import { Fragment } from 'react';
import { Component } from 'react';
import ModalContainer from '../../store/modal/ModalContainer';
import { connect } from 'react-redux';

import * as homeActions from './actions/home.actions';

import styles from '../../Components/css/modal.module.css';

class Home extends Component {
  render() {
    const { openModal } = this.props;

    return (
      <div className="AllHome">
        <Fragment>
          <ModalContainer />
        </Fragment>
        <button className={styles.butt} onClick={() => openModal()}>
          <span className={styles.button_text}>Press</span>
          <div className={styles.button_backgrounds}>
            <div className={styles.button_circle}></div>
            <div className={styles.button_circle1}></div>

            {/* <div className={styles.button_circle styles.button_circle1}></div>
            <div className={styles.button_circle styles.button_circle2}></div>
            <div className={styles.button_circle styles.button_circle3}></div>
            <div className={styles.button_circle styles.button_circle4}></div> */}
          </div>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ ...state.modalReducer });

const mapDispatchToProps = {
  closeModal: homeActions.closeModalAction,
  openModal: homeActions.openModalAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
