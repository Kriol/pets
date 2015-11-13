/**
 * Created by krio on 10.11.15.
 */
'use strict';
module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/sass',
                    src: ['*.scss'],
                    dest: 'src/css',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'www/css/style.min.css': ['src/css/*.css']
                }
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: ['Angular']
                }
            },
            my_target: {
                files: {
                    'www/js/script.min.js': ['src/js/*.js']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    require('time-grunt')(grunt);
    grunt.registerTask('dev', ['sass']);
    grunt.registerTask('prod', ['sass', 'cssmin', 'uglify'])
};