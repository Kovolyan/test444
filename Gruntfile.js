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

        sprite: {
            all: {
                src: 'images/sprites/*',
                dest: 'images/sprites.png',
                destCss: 'sass/_sprites.sass',
                padding: 2
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
            },
             dist: {
                src: [
                    'css/slick/slick.css',
                    'css/jquery.selectBoxIt.css'
                ],
                dest: 'css/build/production.css'
            },

        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        cssmin: {
          build: {
                src: 'css/build/production.css',
                dest: 'css/build/production.min.css'
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

            sprite: {
                files: ['images/sprites/*'],
                tasks: ['sprite']
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

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

   
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'sprite', 'cssmin']);

};