import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'

class Button extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string,
    classNames:PropTypes.string
  };

  render() {

    const {loading, text, classNames} = this.props;

    let content = (loading) ? (
      <div className="spinner"></div>
    ) : (
      <span>{text}</span>
    );

    return (
      <button className={classNames}>
        {content}
      </button>
    )
  }

}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Button);