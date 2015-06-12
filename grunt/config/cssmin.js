/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {

	grunt.config.set('cssmin', {
		dist: {
      files: [{
        sourceMap: true,
        expand: true,
        cwd: '.staging',
        src: ['**/*.css'],
        dest: '.tmp/public'
      }]
    },
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
