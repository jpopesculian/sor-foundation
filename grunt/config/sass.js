module.exports = function(grunt) {

  grunt.config.set('sass', {

    dev: {
      files: [{
        expand: true,
        cwd: '.staging/styles',
        src: ['**/*.scss'],
        dest: '.staging/styles',
        ext: '.css'
      }]

    },

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
};
