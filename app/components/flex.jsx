'use strict';

import React from 'react';

class Flex extends React.Component {

  static propTypes      =     {
    "inline"            :     React.PropTypes.bool,
    "column"            :     React.PropTypes.bool,
    "stack"             :     React.PropTypes.bool,
    "reverse"           :     React.PropTypes.bool,
    "wrap"              :     React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.string
    ]),
    "justify-content"   :     React.PropTypes.string,
    "align-items"       :     React.PropTypes.string,
    "align-content"     :     React.PropTypes.string
  };

  renderChildren () {
    return React.Children.map(this.props.children, child => {
      const childProps = Object.assign({}, child.props);

      if ( ( 'flex-order' in childProps ) ) {
        if ( ! childProps.style ) {
          childProps.style = {};
        }
        childProps.style.order = childProps.order;
      }

      if ( ( 'flex-grow' in childProps ) ) {
        if ( ! childProps.style ) {
          childProps.style = {};
        }
        childProps.style.flexGrow = childProps['flex-grow'];
      }

      if ( ( 'flex-shrink' in childProps ) ) {
        if ( ! childProps.style ) {
          childProps.style = {};
        }
        childProps.style.flexShrink = childProps['flex-shrink'];
      }

      if ( ( 'flex-basis' in childProps ) ) {
        if ( ! childProps.style ) {
          childProps.style = {};
        }
        childProps.style.flexBasis = childProps['flex-basis'];
      }

      if ( ( 'align' in childProps ) ) {
        if ( ! childProps.style ) {
          childProps.style = {};
        }
        childProps.style.alignSelf = childProps['align'];
      }

      return React.cloneElement(child, childProps);
    });
  }

  style () {
    const {
      inline,
      column,
      stack,
      reverse,
      wrap
    } = this.props;

    const noWrap              =   this.props['no-wrap'];
    const justifyContent      =   this.props['justify-content'];
    const alignItems          =   this.props['align-items'];
    const alignContent        =   this.props['align-content'];

    const style               =   {
      display                 :   'flex',
      flexDirection           :   'row'
    };

    if ( inline ) {
      style.display = 'inline-flex';
    }

    if ( column || stack ) {
      style.flexDirection = 'column';
    }

    if ( reverse ) {
      if ( column || stack ) {
        style.flexDirection = 'column-reverse';
      }
      else {
        style.flexDirection = 'row-reverse';
      }
    }

    if ( wrap ) {
      if ( wrap === 'reverse' ) {
        style.flexWrap = 'wrap-reverse';
      }
      else {
        style.flexWrap = 'wrap';
      }
    }

    if ( wrap === false ) {
      style.flexWrap = 'nowrap';
    }

    if ( justifyContent ) {
      style.justifyContent = justifyContent;
    }

    if ( alignItems ) {
      style.alignItems = alignItems;
    }

    if ( alignContent ) {
      style.alignContent = alignContent;
    }

    return style;
  }

  render () {
    return (
      <div style={ this.style() }>
        { this.renderChildren() }
      </div>
    );
  }
}

export default Flex;
