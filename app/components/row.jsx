'use strict';

import React from 'react';

class Row extends React.Component {
  render () {
    let style = {
      display : 'flex',
      flexDirection : 'row'
    };

    if ( this.props.inline ) {
      style.display = 'inline-flex';
    }

    if ( this.props.reverse ) {
      style.flexDirection = 'row-reverse';
    }

    if ( 'wrap' in this.props ) {
      if ( this.props.wrap ) {
        style.flexWrap = 'wrap';
      }
      else {
        style.flexWrap = 'nowrap';
      }
    }

    if ( this.props['wrap-reverse'] ) {
      style.flexWrap = 'wrap-reverse';
    }

    if ( this.props['justify-content'] ) {
      this.props.justify = this.props['justify-content'];
    }

    if ( this.props.justify ) {
      if ( this.props.justify === 'start' ) {
        this.props.justify = 'flex-start';
      }
      else if ( this.props.justify === 'end' ) {
        this.props.justify = 'flex-end';
      }
      else if ( this.props.justify === 'between' ) {
        this.props.justify = 'space-between';
      }
      else if ( this.props.justify === 'around' ) {
        this.props.justify = 'space-around';
      }

      style.justifyContent = this.props.justify;
    }

    return (
      <div style={ style }>
        { this.props.children }
      </div>
    );
  }
}

export default Row;
