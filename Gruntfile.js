module.exports = function(grunt) {

  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    sourceMap: true,
                    outputStyle: 'compressed'
                },
                files: {
                    'css/main.css': 'sass/main.sass'
                }
            }
        },

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

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

         watch: {
            sass: {
                files: ['sass/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },

            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

   
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);

};