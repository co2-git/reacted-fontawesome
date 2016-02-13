'use strict';

import describe           from 'redtea';
import should             from 'should';
import React              from 'react';
import css                from 'css';
import ReactDOMServer     from 'react-dom/server';
import Flex               from './components/flex';

function test(props = {}) {
  const locals = {};

  function check (props = {}, rules = []) {
    return it => {
      it('should be a React Component', () => {
        locals.flex = new Flex(props);
        locals.flex.should.be.an.instanceof(React.Component);
      });

      it('should render', () => {
        locals.rendered = ReactDOMServer.renderToString(
          React.createFactory(Flex)({})
        );
      });

      it('should have style', () => {
        let styleText;

        locals.rendered.replace(/style="(.+);"/, (matches, style) => {
          styleText = `flex {${style}}`;
        });

        locals.style = css.parse(styleText).stylesheet;

        // console.log(require('util').inspect(locals.style, { depth: null }));
      });

      it(`should have ${rules.length} rule(s)`, () =>
        locals.style.should.be.an.Object()
          .and.have.property('rules')
          .which.is.an.Array()
          .and.have.length(rules.length)
      );

      rules.forEach((rule, ruleIndex) => {
        it('selector', it => {
          it(`should be ${rule.selector}`, () => {
            locals.style.rules[0].should.have.property('selectors')
              .which.is.an.Array();

            locals.style.rules[0].selectors[0]
              .should.be.exactly(rule.selector);
          });
        });

        it('declarations', it => {
          it(`should be ${rule.declarations.length}`, () =>
            locals.style.rules[0]
              .should.have.property('declarations')
              .which.is.an.Array()
              .and.have.length(rule.declarations.length)
          );

          rule.declarations.forEach((declaration, declarationIndex) => {
            it(Object.keys(declaration)[0], it => {
              it('property', it => {
                it(`should be "${Object.keys(declaration)[0]}"`, () =>
                  locals.style.rules[ruleIndex]
                    .declarations[declarationIndex]
                    .should.have.property('property')
                    .which.is.exactly(Object.keys(declaration)[0])
                );
              });

              it('value', it => {
                it(`should be "${declaration[Object.keys(declaration)[0]]}"`, () =>
                  locals.style.rules[ruleIndex]
                    .declarations[declarationIndex]
                    .should.have.property('value')
                    .which.is.exactly(declaration[Object.keys(declaration)[0]])
                );
              });
            });
          });
        });
      });
    };
  }

  return describe('reacted-flex', it => {
    it('should be a class', () => Flex.should.be.a.Function());

    it('<Flex />', describe.use(() => check(
      {},
      [
        {
          selector : 'flex',
          declarations : [
            { display : 'flex' },
            { 'flex-direction' : 'row' }
          ]
        }
      ]
    )));

  });
}

export default test;
