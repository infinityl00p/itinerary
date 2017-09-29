import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from './actions/actions';

import TopNav from './components/TopNav';
import FormContainer from './components/Form/FormContainer';
import WeddingContainer from './components/Wedding/WeddingContainer';

class App extends React.Component {
  /** Opting to pass state down from top level component for clarity.
    * Doing it this way sort of defeats the purpose of the container component
    * pattern when used in conjunction with redux, but can change later. Container
    * components will mainly be used to dispatch actions for now.
    */
  renderFormContainer() {
    return <FormContainer store={this.props.wedding} />
  }

  renderWeddingContainer() {
    return <WeddingContainer weddingStore={this.props.wedding} />;
  }

  render() {
    return (
      <div className='App'>
        <TopNav name={this.props.wedding.name} />
        { this.props.wedding.wedding_id === null ?
            this.renderFormContainer()
            :
            this.renderWeddingContainer()
        }
      </div>
    );
  }
}

App.PropTypes = {
  actions: PropTypes.object,
  wedding: PropTypes.object
};

function mapStateToProps(state) {
  return {
    // Add more as necessary
    wedding: state.wedding
  };
}

// Need to re-understand what this does
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);