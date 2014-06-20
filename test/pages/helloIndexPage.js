var Page = require('astrolabe').Page;

module.exports = Page.create({

    uri: { value: '/hello.html' },
    url: {get: function(){
        var urlBase = 'http://localhost:';
        return urlBase + this._port + this.uri;
    }},

    isAngularPage: { value: true },

    heading: { get: function () {
        return this.findElement(this.by.tagName('h1'));
    }},
    subheading: { get: function () {
        return this.findElement(this.by.tagName('h2'));
    }},
    everybodyLink: { get: function () {
        return this.findElement(this.by.xpath('//a[@href="#Everybody"]'));
    }},
    helloLink: { get: function () {
        return this.findElement(this.by.xpath('//a[@href="#Hello"]'));
    }},
    messageModel: { get: function () {
        return this.findElement(this.by.binding("{{message}}"));
    }},
    port: { set: function (port) {
        this._port = port;
    }}
});