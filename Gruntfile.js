module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    jekyll: {
      build: {
        dest: '_site'
      }
    },

    compass: {
      options: {
        // If you're using global Sass gems, require them here.
        require: ['breakpoint', 'singularitygs'],
        bundleExec: true,
        relativeAssets: true,
        environment: 'development',
        sassDir: '_sass',
        fontsDir: 'fonts'

      },
      prod: {
        options: {
          cssDir: 'css', 
          environment: 'production'
        }   
      },
      dev: {
        options: {
          cssDir: '.tmp/css'
        }   
      },
      dev_direct: {
        options: {
          cssDir: '_site/css'
        }
      }
    },

    watch: {
      sass: {
        files: '_sass/**/*.scss',
        tasks: ['compass:prod']
      },
      sass_direct: {
        files: '_sass/**/*.scss',
        tasks: ['compass:dev_direct'],
        options: {
          spawn: false
        }
      },
      jekyll: {
        files: ['_layouts/*.html', 'css/*.css'],
        tasks: ['jekyll']
      }
    },

    browser_sync: {
      files: {
        src: ['_site/css/*.css'],
      },
      options: {
        watchTask: 'true',
        ghostMode: {
          clicks: true,
          scroll: true,
          links: true,
          forms: true
        },
        server: {
          baseDir: '_site'
        }
      }
    }, 

    clean: {
      prod: ['css'],
      dev: ['.tmp', '_site']
    }, 

    copy: {
      css_dev: {
        expand: true,
        cwd: '.tmp',
        src: 'css/*',
        dest: '_site/'
      }
    }
  });

  // Define Tasks
  grunt.registerTask('build', [
    'compass:dev',
    'jekyll',
    'copy:css_dev'
  ]);

  grunt.registerTask('direct', [
    'build',
    'browser_sync',
    'watch:sass_direct'
  ]);

  grunt.registerTask('default', [
    'build',
    'browser_sync',
    'watch:sass',
    'watch:jekyll'
  ]);
};
