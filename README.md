# json-parse-bigint
convert all the big integers to string in JSON before JSON.parse

## Features
Simple, No dependencies, Less than 1KB

## Install
Browser:

```html
<script src='path/to/safe-json.js'></script>
```

[Node.js](http://nodejs.org):

```bash
npm install json-parse-bigint
```

```javascript
const JsonParseBigInt = require('json-parse-bigint');
```

ES6 module:

```javascript
import JsonParseBigInt from 'json-parse-bigint'
```

## Example
```javascript
var json = '{ "id": 298295614833079897, "name": "test", "is_liked": 1 }';
console.log(JSON.parse(json)); // {id: 298295614833079900, name: "test", is_liked: 1}
console.log(JsonParseBigInt(json)); // {id: "298295614833079897", name: "test", is_liked: 1}
// Use Globally
JSON.parse = JsonParseBigInt
console.log(JSON.parse(json)); // {id: "298295614833079897", name: "test", is_liked: 1}
// Someone try to confuse
var json = '{ "id": 298295614833079897, "name": "\\"test\\": 298295614833079897, ", "is_liked": 1 }';
// No Problem :)
console.log(JsonParseBigInt(json)); // {id: "298295614833079897", name: ""test": 298295614833079897, ", is_liked: 1}
```

## Licence
The MIT Licence.
