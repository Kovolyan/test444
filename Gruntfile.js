module.exports = function(grunt) {

  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

       concat: {
            dist: {
                src: [
                    'js/jquery-1.11.2.min.js',
                    'js/jquery-ui.js',
                    'js/libs/*.js',
                    'js/slick.min.js',
                    'js/common.js'
                ],
                dest: 'js/build/production.js'
            }
        },

    });

  
    grunt.loadNpmTasks('grunt-contrib-concat');

   
    grunt.registerTask('default', ['concat']);

};