module.exports = function (grunt) {
	grunt.registerTask('build', [
		'compile',
    'clean:build',
    'copy:build',
    'copy:index',
  ]);
};
