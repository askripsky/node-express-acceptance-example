module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        mochaProtractor: {
            options: {
                browsers: ['Chrome'],
                timeout: 2000,
                suiteTimeout: 5000
            },
            files: ['test/*.js']
        },
        protractor_webdriver: {
            required_target: { }
        }
    });

    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-mocha-protractor');

    grunt.registerTask('default', ['protractor_webdriver', 'mochaProtractor']);
};
