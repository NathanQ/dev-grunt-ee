module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
          dist: {
                options: {
                    sassDir: ['dev_assets/sass/'],
                    cssDir: 'dev_assets/css/'
                }
          }
        },
        replace: {
            dist: {
                options: {
                    patterns: [{
                        match: 'dev_assets/',
                        replacement: '../'
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['dev_assets/css/style.css'],
                    dest: '../html/css/'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '../html/css/style.css': '../html/css/style.css'
                }
            }
        },
        uglify: {
            all: {
                files: {
                    '../html/scripts/main.min.js': [
                        'dev_assets/scripts/*.js'
                    ]
                }
            }
        },
        watch: {
            css: {
                files: ['dev_assets/sass/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            },
            styles: {
                files: ['dev_assets/css/style.css'],
                tasks: ['cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-replace');
    
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['compass', 'cssmin', 'replace', 'uglify']);
};