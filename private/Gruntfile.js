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
		},
		concat: {
			dist: {
				src: 'js/*',
				dest: '../public/js/app.js'
			}
		},
		watch: {
			scripts: {
				files: ['js/*','sass/*'],
				tasks: ['default'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask(
		'default', ['compass', 'concat', 'watch']
	);
}
