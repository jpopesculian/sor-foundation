/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */

module.exports = function(grunt) {

	grunt.config.set('copy', {
    staging: {
      files: [{
        expand: true,
        cwd: 'assets',
        src: ['**/*'],
        dest: '.staging'
      }]
    },
		public: {
			files: [{
				expand: true,
				cwd: '.staging',
				src: ['**/*.!(scss|es6)'],
				dest: '.tmp/public'
			}]
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		},
    index: {
      files: [{src: 'views/index.ejs', dest: 'www/index.html'}]
    },
    phonegap: {
      files: [
        {
          expand: true,
          cwd: 'www',
          src: ['**/*'],
          dest: 'phonegap/build/www'
        },
        {
          expand: true,
          cwd: 'phonegap/config',
          src: ['**/*'],
          dest: 'phonegap/build'
        }
      ]
    }
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
