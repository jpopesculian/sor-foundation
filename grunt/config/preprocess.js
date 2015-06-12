var environment = require('../environment');

module.exports = function(grunt) {

  grunt.config.set('preprocess', {

    dev: {
      options: {
        inline: true,
        context: environment.dev
      },
      files: [{
        expand: true,
        cwd: '.staging',
        src: ['**/*.(js|es6|html|scss)'],
        dest: '.staging',
      }]

    },

  });

  grunt.loadNpmTasks('grunt-preprocess');
};
