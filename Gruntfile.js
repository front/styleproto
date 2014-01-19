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
      dist: {
        options: {
          cssDir: 'css'
        }   
      },
      site: {
        options: {
          cssDir: '_site/css'
        }
      }
    },

    watch: {
      dist: {
        files: '_sass/**/*.scss',
        tasks: ['compass:dist']
      },
      site: {
        files: '_sass/**/*.scss',
        tasks: ['compass:site'],
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
    }
  });

  // Define Tasks
  grunt.registerTask('build', [
    'compass',
    'jekyll'
  ]);

  grunt.registerTask('site', [
    'build',
    'browser_sync',
    'watch:site'
  ]);

  grunt.registerTask('default', [
    'build',
    'browser_sync',
    'watch:dist'
  ]);
};
