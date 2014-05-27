module.exports = function(grunt) {
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: '../public/css',
					importPath: 'bower_components/foundation/scss',
					outputStyle: 'expanded'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.registerTask(
		'default', ['compass']
	);
}
