module.exports = function(grunt) {

  grunt.config.set('babel', {

    dev: {
      options: {
        stage: 0,
        loose: 'all',
        nonStandard: true,
        modules: 'system',
        optional: [
          'es6.spec.blockScoping',
          'es6.spec.symbols',
          'es6.spec.templateLiterals'
        ],
        sourceMaps: true
      },

      files: [{
        expand: true,
        cwd: '.staging/scripts',
        src: ['**/*.es6', '**/*.jsx'],
        dest: '.staging/scripts',
        ext: '.js'
      }]

    },

  });

  grunt.loadNpmTasks('grunt-babel');
};
