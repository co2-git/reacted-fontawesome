reacted-flex
===

React components to use with CSS3 Flexbox

[More on Flex](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)

# Usage

```js
import React from 'react';
import Flex from 'reacted-flex';

class Layout extends React.Component {
  render () {
    return (
      <Flex inline column>
        <img flex-grow="5" />
        <img flex-shrink="0" flex-basis="300" />
        <img flex-align="end" />
      </Flex>
    );
  }
}
```

# Container

## display

### { display : flex }

```html
<Flex />
```

### { display : inline-flex }

```html
<Flex inline />
```

## flex-direction

### { flex-direction : column }

```html
<Flex column />
<Flex stack />
```

### { flex-direction : reverse }

```html
<Flex reverse />
```

### { flex-direction : column-reverse }

```html
<Flex column reverse />
<Flex column-reverse />
```

## flex-wrap

### { flex-wrap : no-wrap }

```html
<Flex no-wrap />
<Flex wrap={false} />
```

### { flex-wrap : wrap }

```html
<Flex wrap />
<Flex wrap={true} />
```

### { flex-wrap : wrap-reverse }

```html
<Flex wrap reverse />
<Flex wrap-reverse />
```

## justify-content

### { justify-content : flex-start }

```html
<Flex justify-content="flex-start" />
```

### { justify-content : flex-end }

```html
<Flex justify-content="flex-end" />
```

### { justify-content : center }

```html
<Flex justify-content="center" />
```

### { justify-content : space-between }

```html
<Flex justify-content="space-between" />
```

### { justify-content : space-around }

```html
<Flex justify-content="space-around" />
```

## align-items

### { align-items : stretch }

```html
<Flex align-items="stretch" />
```

### { align-items : flex-start }

```html
<Flex align-items="flex-start" />
```

### { align-items : flex-end }

```html
<Flex align-items="flex-end" />
```

### { align-items : center }

```html
<Flex align-items="center" />
```

### { align-items : baseline }

```html
<Flex align-items="baseline" />
```

## align-content

### { align-content : stretch }

```html
<Flex align-content="stretch" />
```

### { align-content : flex-start }

```html
<Flex align-content="flex-start" />
```

### { align-content : flex-end }

```html
<Flex align-content="flex-end" />
```

### { align-content : center }

```html
<Flex align-content="center" />
```

### { align-content : space-between }

```html
<Flex align-content="space-between" />
```

### { align-content : space-around }

```html
<Flex align-content="space-around" />
```

## Item

### { order : <integer> }

```html
<div flex-order={Number} />
```

### { flex-grow : <integer> }

```html
<div flex-grow={Number} />
```

### { flex-shrink : <integer> }

```html
<div flex-shrink={Number} />
```

### { flex-basis : <width> }

```html
<div flex-basis={String} />
```

### { align-self : <auto | flex-start | flex-end | center | baseline | stretch> }

```html
<div flex-align={String} />
<div flex-align-self={String} />
```
