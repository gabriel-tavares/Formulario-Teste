module.exports = function( grunt ) {

	grunt.initConfig({

		sass : {
			dist : {
				options : { style : 'compressed' },
				files : {
					'dist/assets/css/application.css' : 'assets/_sass/application.scss'
				}
			}
    }, // sass

    cssmin: {
    	target: {
    		files: [{
    			expand: true,
    			cwd: 'node_modules/bootstrap/dist/css',
    			src: ['*.css', '!*.min.css'],
    			dest: 'dist/assets/css',
    			ext: '.min.css'
    		}]
    	}
    },

    concat: {
    	options: {
    		separator: ';',
    	},
    	bootstrap: {
    		src: [
    		'node_modules/bootstrap/js/transition.js',
    		'node_modules/bootstrap/js/alert.js',
    		'node_modules/bootstrap/js/button.js',
    		'node_modules/bootstrap/js/carousel.js',
    		'node_modules/bootstrap/js/collapse.js',
    		'node_modules/bootstrap/js/dropdown.js',
    		'node_modules/bootstrap/js/modal.js',
    		'node_modules/bootstrap/js/tooltip.js',
    		'node_modules/bootstrap/js/popover.js',
    		'node_modules/bootstrap/js/scrollspy.js',
    		'node_modules/bootstrap/js/tab.js',
    		'node_modules/bootstrap/js/affix.js'
    		],
    		dest: 'dist/assets/js/bootstrap-js.js'
    	}
    }, //concat

    uglify : {
    	options : {
    		mangle : false
    	},
    	my_target : {
    		files : {
    			'dist/assets/js/main.js' : [ 'assets/_js/scripts.js' ],
    			'dist/assets/js/bootstrap-js.js' : [ 'dist/assets/js/bootstrap-js.js' ]
    		}
    }, // uglify

    watch : {
    	dist : {
    		files : [
    		'assets/_js/**/*',
    		'assets/_sass/**/*'
    		],

    		tasks : [ 'sass', 'cssmin', 'concat', 'uglify' ]
    	}
    } // watch

});


  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );



  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'sass', 'cssmin', 'concat', 'uglify' ] );

  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};