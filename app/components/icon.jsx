'use strict';

import React from 'react';

class Icon extends React.Component {

  static propTypes      =     {
    "icon"              :     React.PropTypes.string.isRequired,
    "size"              :     React.PropTypes.number,
    "spin"              :     React.PropTypes.bool,
    "browser"           :     React.PropTypes.bool
  };

  className () {
    const { icon, size, spin, className } = this.props;

    const classes = [];

    if ( className ) {
      classes.push(className);
    }

    classes.push('fa', `fa-${icon}`);

    if ( spin ) {
      classes.push('fa-spin');
    }

    if ( size ) {
      classes.push(`fa-${size}x`);
    }

    return classes.join(' ');
  }

  render () {
    if ( this.props.browser ) {
      require("font-awesome/css/font-awesome.min.css");
    }

    return (
      <i { ...this.props } className={ this.className() }></i>
    );
  }
}

export default Icon;
