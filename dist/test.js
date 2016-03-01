'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redtea = require('redtea');

var _redtea2 = _interopRequireDefault(_redtea);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _css = require('css');

var _css2 = _interopRequireDefault(_css);

var _xmldom = require('xmldom');

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _icon = require('./components/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function test() {
  var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var locals = {};

  Object.assign(props, { browser: false });

  function getDOMNode(props) {
    var rendered = _server2.default.renderToString(_react2.default.createFactory(_icon2.default)(props));

    return new _xmldom.DOMParser().parseFromString(rendered, 'text/html');
  }

  return (0, _redtea2.default)('reacted-fontawesome', function (it) {
    it('should be a class', function () {
      return _icon2.default.should.be.a.Function();
    });

    it('<Icon icon="user" size="2" spin={ true } />', function (it) {
      it('should have the right classes', function (it) {
        var domNode = getDOMNode({
          icon: 'user',
          size: 2,
          spin: true
        }).documentElement;

        var className = undefined;

        for (var i in domNode.attributes) {
          if (domNode.attributes[i].name === 'class') {
            className = domNode.attributes[i].value;
          }
        }

        locals.classes = className.split(' ');

        it('should be a font icon', function () {
          return locals.classes.indexOf('fa').should.be.above(-1);
        });

        it('should be a user icon', function () {
          return locals.classes.indexOf('fa-user').should.be.above(-1);
        });

        it('should be the right size', function () {
          return locals.classes.indexOf('fa-2x').should.be.above(-1);
        });

        it('should spin', function () {
          return locals.classes.indexOf('fa-spin').should.be.above(-1);
        });
      });
    });
  });
}

exports.default = test;