module.export = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'css/*.css': 'sass/*.sass'
					}
				}
			}
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{pgn,jpg,gif}'],
					dest: 'images/build/'
				}]
			}
		}
		
		watch: {
			scripts: {
				files: ['sass/*.sass'],
				tasks: ['sass'],
				options: {
					spawn: false,
				},
			}
		}
	});
	
	// Load the plugin tasks
	
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// Default task(s)
	grunt.registerTask('default', ['sass', 'imagemin', 'watch']);
};