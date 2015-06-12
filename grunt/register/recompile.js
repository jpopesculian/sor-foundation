module.exports = function (grunt) {
	grunt.registerTask('recompile', [
    'compile',
		'sync:dev',
	]);
};
