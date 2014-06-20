var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect,
    http = require('http'),
    app = require('../app'),
    wdUtil = require('./util/WebdriverUtil'),
    helloPage = require('./pages/helloIndexPage'),
    mainPage = require('./pages/mainPage');

chai.use(chaiAsPromised);

var server;
var testPort = 3002;

describe('index page', function () {
    before(function () {
        server = http.createServer(app);

        // If you aren't using Angular, tell Protractor to not wait for Angular to start
        browser.ignoreSynchronization = !mainPage.isAngularPage;

        wdUtil.startServer(server, testPort);
    });

    beforeEach(function () {
        mainPage.port = testPort;
        helloPage.port = testPort;
        mainPage.go();
    });

    it('should have expected heading', function () {
        expect(mainPage.heading.getText()).to.eventually.equal('Main Page');
    });

    it('should have link to hello page', function () {
        mainPage.helloLink.click();

        expect(helloPage.heading.getText()).to.eventually.equal('Hello World');
    });

    after(function () {
        wdUtil.stopServer(server);
    });
});