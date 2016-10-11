# rollup-plugin-ignore
Prevent a module from showing up in the output bundle. You will get `export default {}` instead.

## Installation
npm install --save-dev rollup-plugin-ignore

## Usage
Let’s say you want to prevent `fs` and `net` from being bundled:

```javascript
import { rollup } from 'rollup';
import ignore from 'rollup-plugin-ignore';

rollup({
  entry: 'main.js',
  plugins: [
    ignore(['fs', 'net'])
  ]
}).then(...)
```

## License
MIT