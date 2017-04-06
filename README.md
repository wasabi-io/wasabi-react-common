## wasabi-react-common 

[![npm package](https://badge.fury.io/gh/wasabi-io%2Fwasabi-react-common.svg)](https://badge.fury.io/gh/wasabi-io%2Fwasabi-react-common.svg)
[![Build Status](https://travis-ci.org/wasabi-io/wasabi-react-common.svg?branch=master)](https://travis-ci.org/wasabi-io/wasabi-react-common)
[![codecov](https://codecov.io/gh/wasabi-io/wasabi-react-common/branch/master/graph/badge.svg)](https://codecov.io/gh/wasabi-io/wasabi-react-common)

#### Motivation

Provides some react common classes and utilities.

#### [Type Docs](https://wasabi-io.github.io/wasabi-react-common)

#### Usage

```ssh
$ npm install --save wasabi-react-common
```


```typescript jsx
import Component from "wasabi-react-common";

export default class ExampleComponent extends Component<> {
    render(){
        return (
            <div>This is a example React Component </div>
        )
    }
}
```
#### Getting Started

* Contribute Project

```ssh
$ git clone https://github.com/wasabi-io/wasabi-react-common.git`
$ cd wasabi-react-common
$ npm install
```

* run test

```ssh
$ npm test
```

* run coverage

```ssh
$ npm run coverage
```


* export docs

```ssh
$ npm run docs
```

* build code as javascript (common-js)

```ssh
$ npm build
```