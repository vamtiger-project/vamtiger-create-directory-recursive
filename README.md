# VAMTIGER Create Directory Recursive
Recursively create directories for a defined path.

## Installation
[VAMTIGER Create Directory Recursive](https://github.com/vamtiger-project/vamtiger-create-directory-recursive) can be installed using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/):
```bash
npm i --save vamtiger-create-directory-recursive # local
npm i --global vamtiger-create-directory-recursive # global
```
or
```bash
yarn add vamtiger-create-directory-recursive # local
yarn global vamtiger-create-directory-recursive #global
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Create Directory Recursive](https://github.com/vamtiger-project/vamtiger-create-directory-recursive):
```javascript
import createDirectory from 'vamtiger-create-directory-recursive';
```
or
```javascript
const createDirectory = require('vamtiger-create-directory-recursive').default;
```
Creating a directory returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise):
```javascript
createDirectory({
        path: '/some/directory/path'
    })
    .catch(handleError);
```
Since [VAMTIGER Create Directory Recursive](https://github.com/vamtiger-project/vamtiger-create-directory-recursive) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), it can be more conveniently invoked within an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function):
```javascript
async someAsyncFunction function() {
    const bashResult = await createDirectory({
        path: '/some/directory/path'
    });
}
```