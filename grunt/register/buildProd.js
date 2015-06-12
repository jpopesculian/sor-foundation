module.exports = function (grunt) {
	grunt.registerTask('buildProd', [
		'compile',
    'minify',
		'clean:build',
		'copy:build',
    'copy:index',
	]);
};
