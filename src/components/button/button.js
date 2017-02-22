import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'

class Button extends Component {

  static defaultProps = {
    loading: true,
    text: 'Button',
    type: 'button',
    classNames:'btn-md'
  };

  render() {

    const {loading, text, type, classNames} = this.props;

    let content = (loading) ? (
      <div className="spinner"></div>
    ) : (
      <span>{text}</span>
    );

    return (
      <button type={type} className={classNames}>
        {content}
      </button>
    )
  }

}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Button);