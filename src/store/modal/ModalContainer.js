import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { unlockScroll } from '../../lib/lib_module/scrollLock.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { actions } from './modalReducer';

import styles from '../../Components/css/modal.module.css';

class ModalContainer extends Component {
  closeModal = () => {
    const { closeModal, onClose = () => {} } = this.props;
    closeModal();
    onClose();
  };

  render() {
    const {
      modalProps: { isOpen },
    } = this.props;

    // const SpecificModal = modalType;

    return (
      <React.Fragment>
        {isOpen && (
          <TransitionGroup>
            <CSSTransition
              classNames={styles.ModalContainer}
              timeout={150}
              onExited={unlockScroll}
            >
              <div className={styles.ModalContainer}>
                <div className={styles.popup_inside}>
                  <div className={styles.backgroundsw}></div>
                </div>
                <div
                  className={styles.ModalContainer__overlay}
                  onClick={this.closeModal}
                />
                <div className={styles.ModalContainer__content}>
                  <div>
                    <div>
                      <h1>well done</h1>
                      <p>Do you like it?</p>
                    </div>
                    <button
                      className={styles.ModalContainer__close}
                      onClick={this.closeModal}
                    >
                      ×
                    </button>
                    {/* <div className='ModalContainer__inner'>
                <SpecificModal {...this.props} />
              </div> */}
                  </div>
                </div>
              </div>
            </CSSTransition>
          </TransitionGroup>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => state.modalReducer;
const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(actions.closeModal()),
  };
};

ModalContainer.propTypes = {
  modalProps: PropTypes.shape({
    isOpen: PropTypes.bool,
  }),
};

ModalContainer.defaultProps = {
  modalProps: { isOpen: false },
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
