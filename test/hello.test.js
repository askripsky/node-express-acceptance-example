var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect,
    http = require('http'),
    app = require('../app'),
    wdUtil = require('./util/WebdriverUtil'),
    helloPage = require('./pages/helloIndexPage');

chai.use(chaiAsPromised);

var server;
var testPort = 3001;

describe('index page', function () {
    before(function () {
        server = http.createServer(app);

        browser.ignoreSynchronization = !helloPage.isAngularPage;

        wdUtil.startServer(server, testPort);
    });

    beforeEach(function () {
        helloPage.port = testPort;
        helloPage.go();
    });

    it('should have expected heading', function () {
        expect(helloPage.heading.getText()).to.eventually.equal('Hello World');
    });

    it('should display Hello partial by default', function () {
        expect(helloPage.subheading.getText()).to.eventually.equal('Hello Partial');
    });

    it('should display Everybody partial', function () {
        helloPage.everybodyLink.click();

        expect(helloPage.subheading.getText()).to.eventually.equal('Everybody Partial');
        expect(helloPage.messageModel.getText()).to.eventually.equal('Hello Everybody!');
    });

    it('should display Hello partial', function () {
        helloPage.helloLink.click();

        expect(helloPage.subheading.getText()).to.eventually.equal('Hello Partial');
        expect(helloPage.messageModel.getText()).to.eventually.equal('Hi, Dr. Nick!');
    });

    after(function () {
        wdUtil.stopServer(server);
    });
});