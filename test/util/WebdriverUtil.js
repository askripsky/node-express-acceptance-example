exports.startServer = function(server, port){
    server.setTimeout(1000);

    // Need to add the server startup to Webdriver Control Flow
    protractor.promise.controlFlow().execute(function(){
        var deferred = new protractor.promise.Deferred();

        server.listen(port, function(){
            deferred.fulfill(true);
        });

        return deferred.promise;
    });
};

exports.stopServer = function(server){
    // Need to add the server.close to Webdriver Control Flow
    protractor.promise.controlFlow().execute(function() {
        var deferred = new protractor.promise.Deferred();

        server.close(function(){
            deferred.fulfill(true);
        });

        return deferred.promise;
    });
};