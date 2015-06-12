/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

	grunt.config.set('uglify', {
		dist: {
      files: [{
        screwIE8: true,
        sourceMap: true,
        expand: true,
        cwd: '.staging',
        src: ['**/*.js'],
        dest: '.tmp/public'
      }]
    },
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};
