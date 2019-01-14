# node-with-actor

This is the repository for testing node which is working with Comedy (based on actor model)

Referred article : [Comedy - Node.js actors for flexible scalability](https://medium.com/saymon/comedy-node-js-actors-for-flexible-scalability-731baf42fa1d)

## tutorials

### 1. creating repo with `npm init`

```
$ npm init
```

```
package name: (with-actor) node-with-actor
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/kaaisuzuki/Desktop/workspace/node-with-actor/package.json:

{
  "name": "node-with-actor",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes
```

### 2. install all packages which requires

comedy
```
$ npm i -S comedy
```

bluebird
```
$ npm i -S bluebird
```

restify
```
$ npm i -S restify
```

restify-errors
```
$ npm i -S restify-errors
```

### 3. create prime-finder.js

[Source code here](https://github.com/untu/comedy/)

### 4. run the code which is created

```
$ node prime-number.js
```

### 5. try on your browser

access your browser

```
http://localhost:8080/next-prime/50
```

```
http://localhost:8080/next-prime/500
```

```
http://localhost:8080/next-prime/5000
```

```
http://localhost:8080/next-prime/500000000
```

success if you could see prime numbers on your browser(ツ)👍
