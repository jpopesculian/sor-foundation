module.exports = function (grunt) {
	grunt.registerTask('prod', [
		'compile',
    'minify',
	]);
};
