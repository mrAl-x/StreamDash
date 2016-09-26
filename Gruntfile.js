module.exports = function(grunt) {

   // 1. All configuration goes here 
   grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),

     sass: {
         dist: {
            options: {
               style: 'compressed'
            },
            files: {
               'css/main.css': 'css/*.scss',
            }
         }
      },

      watch: {
         options: {
            livereload: true
         },
         html: {
            files: '*.html',
            options: {
               spawn: false
            }
         },
         css: {
            files: ['css/*.scss', 'css/libs/*.scss'],
            tasks: ['sass'],
            options: {
               spawn: false
            }
         },
         scripts: {
            files: ['js/bundle.min.js'],
            options: {
               spawn: false,
            }
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['sass']);

};