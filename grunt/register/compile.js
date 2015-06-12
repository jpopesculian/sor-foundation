module.exports = function (grunt) {
	grunt.registerTask('compile', [
    'clean:staging',
    'copy:staging',
    'preprocess:dev',
    'babel:dev',
    'sass:dev',
		'clean:public',
    'copy:public',
    'clean:staging',
	]);
};
