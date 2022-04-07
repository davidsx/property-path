# dot-prop

> Type for nested object and array. Get the path and value for it.

## Install

```sh
npm install path-of
```

## Usage

```js
import { PathOf, ValueOf } from 'path-of';

// PathOf
type PathOfArray = PathOf<number[]>;
//=> '[0]'

type PathOfObject = PathOf<{ foo: string }>;
//=> 'foo'

type PathOfNestedArray = PathOf<number[][]>;
//=> '[0][0]'

type PathOfNestedObject = PathOf<{ foo: { bar: string } }>
//=> 'foo.bar'

// ValueOf
type ValueOfArray = ValueOf<number[], '[0]'>;
//=> number

type ValueOfObject = ValueOf<{ foo: string }, 'foo'>;
//=> string

type ValueOfNestedArray = ValueOf<number[][], '[0]'>;
//=> number[]

type ValueOfNestedObject = ValueOf<{ foo: { bar: string } }, 'foo'>
//=> { bar: string }
```

## API

Click the type names for details.

### Basic

- [`PathOf`](src/path-of.d.ts) - Get the property path' literals for nested object. Returns [never](https://www.typescriptlang.org/docs/handbook/2/functions.html#never) if it is a primitive type.
- [`ValueOf`](src/value-of.d.ts) - Get the implicit type from the property path of nested object. Returns Returns [never](https://www.typescriptlang.org/docs/handbook/2/functions.html#never) if the path is invalid.
- [`ArrayPathOf`](src/array-path-of.d.ts) - Get the property path' literals for nested object which value of type match [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Returns Returns [never](https://www.typescriptlang.org/docs/handbook/2/functions.html#never) if it is a primitive type.
- [`ValueOf`](src/value-of.d.ts) - Get the implicit type from the property path of nested object which value of type match [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).  Returns Returns [never](https://www.typescriptlang.org/docs/handbook/2/functions.html#never) if the path is invalid.

### Dot path

- [`DotPathOf`](src/path-of.d.ts) - Get the property path' literals in "dot" for nested object. Returns [never](https://www.typescriptlang.org/docs/handbook/2/functions.html#never) if it is a primitive type.
- [`DotValueOf`](src/value-of.d.ts) - Get the implicit type from the property "dot" path of nested object. Returns Returns [never](https://www.typescriptlang.org/docs/handbook/2/functions.html#never) if the path is invalid.
- [`DotArrayPathOf`](src/array-path-of.d.ts) - Get the property path' literals in "dot" for nested object which value of type match [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Returns Returns [never](https://www.typescriptlang.org/docs/handbook/2/functions.html#never) if it is a primitive type.
- [`DotValueOf`](src/value-of.d.ts) - Get the implicit type from the property "dot" path of nested object which value of type match [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).  Returns Returns [never](https://www.typescriptlang.org/docs/handbook/2/functions.html#never) if the path is invalid.
