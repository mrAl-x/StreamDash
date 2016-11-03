module.exports = function(grunt) {

   // 1. All configuration goes here 
   grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),

      concat: {
         dist: {
            src: [
              'js/main.js'
            ],
            dest: '../production/streamdash/js/main.js',
         }
      },

      uglify: {
         build: {
            src: '../production/streamdash/js/main.js',
            dest: '../production/streamdash/js/bundle.min.js'
         }
      },

      imagemin: {
         dynamic: {
            files: [
               {
                  expand: true,
                  flatten: true,
                  cwd: 'images/',
                  src: ['**/*.{png,jpg}'],
                  dest: '../production/streamdash/assets/images/'
               }
            ]
         }
      },

      sass: {
         dist: {
            options: {
               style: 'compressed'
            },
            files: {
               '../production/streamdash/css/main.css': 'sass/*.scss',
            }
         }
      },

      copy: {
         main: {
            files: [
               {expand: true, flatten: true, src: ['./*.html'], dest: '../production/streamdash/'},
               {expand: true, flatten: true, src: ['./favicons/*'], dest: '../production/streamdash/favicons/'},
               {expand: true, flatten: true, src: ['./sass/libs/*.scss'], dest: '../production/streamdash/css/libs/'},
               {expand: true, flatten: true, src: ['./sass/libs/**/*.css'], dest: '../production/streamdash/css/libs/'},
               {expand: true, flatten: true, src: ['./fonts/*'], dest: '../production/streamdash/assets/fonts'},
               {expand: true, flatten: true, src: ['./js/libs/*.js'], dest: '../production/streamdash/js/libs/'},
               {expand: true, flatten: true, src: ['./js/bundle.min.js'], dest: '../production/streamdash/js/'}
            ],
         }
      },

      watch: {
         options: {
            livereload: true
         },
         html: {
            files: ['*.html'],
            tasks: ['copy'],
            options: {
               spawn: false
            }
         },
         scripts: {
            files: ['js/bundle.min.js', 'js/libs/*.js'],
            tasks: ['copy'],
            options: {
               spawn: false,
            }
         },
         css: {
            files: ['sass/*.scss', 'sass/libs/*.scss'],
            tasks: ['sass', 'copy'],
            options: {
               spawn: false
            }
         }
      }


   });

   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['copy', 'concat', 'uglify', 'sass', 'imagemin']);

};