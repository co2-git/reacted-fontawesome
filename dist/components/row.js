'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Row).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'renderChildren',
    value: function renderChildren() {
      return _react2.default.Children.map(this.props.children, function (child) {
        var childProps = Object.assign({}, child.props);

        var style = childProps.style;


        if ('flex-grow' in childProps) {
          if (!style) {
            childProps.style = {};
          }
          if (typeof childProps['flex-grow'] === 'number') {
            childProps.style.flexGrow = childProps['flex-grow'];
          } else {
            childProps.style.flexGrow = 2;
          }
        }

        return _react2.default.cloneElement(child, childProps);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        display: 'flex',
        flexDirection: 'row'
      };

      if (this.props.inline) {
        style.display = 'inline-flex';
      }

      if (this.props.reverse) {
        style.flexDirection = 'row-reverse';
      }

      if ('wrap' in this.props) {
        if (this.props.wrap) {
          style.flexWrap = 'wrap';
        } else {
          style.flexWrap = 'nowrap';
        }
      }

      if (this.props['wrap-reverse']) {
        style.flexWrap = 'wrap-reverse';
      }

      if (this.props['justify-content']) {
        this.props.justify = this.props['justify-content'];
      }

      if (this.props.justify) {
        if (this.props.justify === 'start') {
          this.props.justify = 'flex-start';
        } else if (this.props.justify === 'end') {
          this.props.justify = 'flex-end';
        } else if (this.props.justify === 'between') {
          this.props.justify = 'space-between';
        } else if (this.props.justify === 'around') {
          this.props.justify = 'space-around';
        }

        style.justifyContent = this.props.justify;
      }

      return _react2.default.createElement(
        'div',
        { style: style },
        this.renderChildren()
      );
    }
  }]);

  return Row;
}(_react2.default.Component);

exports.default = Row;