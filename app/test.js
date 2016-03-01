'use strict';

import describe           from 'redtea';
import should             from 'should';
import React              from 'react';
import css                from 'css';
import { DOMParser }      from 'xmldom';
import ReactDOMServer     from 'react-dom/server';
import Icon               from './components/icon';

function test(props = {}) {
  const locals = {};

  Object.assign(props, { browser : false });

  function getDOMNode (props) {
    const rendered = ReactDOMServer.renderToString(
      React.createFactory(Icon)(props)
    );

    return new DOMParser().parseFromString(rendered, 'text/html');
  }

  return describe('reacted-fontawesome', it => {
    it('should be a class', () => Icon.should.be.a.Function());

    it('<Icon icon="user" size="2" spin={ true } />', it => {
      it('should have the right classes', it => {
        const domNode = getDOMNode({
          icon : 'user',
          size : 2,
          spin : true
        }).documentElement;

        let className;

        for ( let i in domNode.attributes ) {
          if ( domNode.attributes[i].name === 'class' ) {
            className = domNode.attributes[i].value;
          }
        }

        locals.classes = className.split(' ');

        it('should be a font icon', () =>
          locals.classes.indexOf('fa').should.be.above(-1)
        );

        it('should be a user icon', () =>
          locals.classes.indexOf('fa-user').should.be.above(-1)
        );

        it('should be the right size', () =>
          locals.classes.indexOf('fa-2x').should.be.above(-1)
        );

        it('should spin', () =>
          locals.classes.indexOf('fa-spin').should.be.above(-1)
        );
      });
    });

  });
}

export default test;
