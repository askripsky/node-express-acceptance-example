This is a example of automated acceptance tests using: [Protractor](https://github.com/angular/protractor), [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).

There are examples for Angular and non-Angular pages.

Since Protractor patches Mocha to work inside [Webdriver's Control Flow](https://github.com/angular/protractor/blob/master/docs/control-flow.md), the server setup and teardown were added to the Control Flow. 

The Webdriver server is managed by [grunt-protractor-webdriver](https://www.npmjs.org/package/grunt-protractor-webdriver) Grunt plugin.

## Running Tests

    npm install
    grunt
      
## Manually Running Express App

    node app.js
