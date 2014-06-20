var Page = require('astrolabe').Page;

module.exports = Page.create({

    url: {get: function(){
        var urlBase = 'http://localhost:';
        var uri = '/index.html';
        return urlBase + this._port + uri;
    }},

    isAngularPage: { value: false },

    heading: { get: function () {
        return this.findElement(this.by.tagName('h1'));
    }},
    helloLink: { get: function () {
        return this.findElement(this.by.tagName('a'));
    }},
    port: { set: function (port) {
        this._port = port;
    }}
});