import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as actions from '../actions/actions';

class WeddingList extends React.Component {
  renderForm() {
    console.log('james stuff');
  }

  renderWeddingItem() {
    console.log(this.props.wedding);
  }

  render() {
    return (
      <div className="wedding-list">
        { this.props.wedding.wedding_id == null ?
            this.renderForm()
            :
            this.renderWeddingItem()
        }
      </div>
    );
  }
}

WeddingList.PropTypes = {
  actions: PropTypes.object,
  wedding: PropTypes.object
};

function mapStateToProps(state) {
  return {
    wedding: state.wedding
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeddingList);