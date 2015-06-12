module.exports = function (grunt) {
  grunt.registerTask('phonegap', [
    'buildProd',
    'clean:phonegap',
    'copy:phonegap',
    'clean:build',
  ]);
};
