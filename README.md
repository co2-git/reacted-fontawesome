reacted-flex
===

React components to use with CSS3 Flexbox

[More on Flex](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)

# Usage

```js
import React from 'react';
import { Row } from 'reacted-flex';

class Layout extends React.Component {
  render () {
    return (
      <Row justify="between" baseline>
        <img flex-grow="5" />
        <img flex-shrink="0" flex-basis="300" />
        <img flex-align="end" />
      </Row>
    );
  }
}
```

# Row Attributes

## Inline

```html
<Row inline />
```

## Reverse

```html
<Row reverse />
```

## Wrap

Defaults to `wrap=false`.

```html
<Row wrap /> <!-- wrap -->
<Row wrap={false} /> <!-- no wrap -->
<Row wrap-reverse /> <!-- wrap reverse -->
```

## Justify content

You can use either the `justify-content` or the `justify` attributes.

The following aliases are accepted:

- start (for flex-start)
- end ( for flex-end)
- between (for space-between)
- around (for space-around)

```html
<Row justify-content={String} />
```

## Align items

You can use the `justify-content` or the `justify` attribute

```html
<Row align={String} />
```
