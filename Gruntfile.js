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
        imagesDir: 'img',
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
          cssDir: '.tmp/compass/css'
        }   
      },
      dev_direct: {
        options: {
          cssDir: '_site/css'
        }
      },
      styleguide_direct: {
        options: {
          cssDir: '_site/styleguide/public'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      dev: {
        expand: true,
        flatten: true,
        src: '.tmp/compass/css/*.css',
        dest: '.tmp/css'
      }
    },

    watch: {
      sass: {
        files: '_sass/**/*.scss',
        tasks: ['compass:dev', 'autoprefixer:dev', 'copy:css_dev', 'styleguide', 'copy:styleguide']
      },
      sass_direct: {
        files: '_sass/**/*.scss',
        tasks: ['compass:dev_direct', 'compass:styleguide_direct'],
        options: {
          spawn: false
        }
      },
      jekyll: {
        files: ['**/*.html', '_posts/*.md', 'css/*.css'],
        tasks: ['jekyll', 'copy:bower']
      }
    },

    browserSync: {
      files: {
        src: ['_site/css/*.css', '_site/**/*.html'],
      },
      options: {
        watchTask: true,
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
      dev: ['.tmp', '_site'],
      styleguide: ['styleguide']
    }, 

    copy: {
      css_dev: {
        expand: true,
        cwd: '.tmp',
        src: 'css/*',
        dest: '_site/'
      },
      styleguide_doc: {
        files: [
          {expand: true, cwd: '_sass/', src: 'styleguide.md', dest: '.tmp/css/'}
        ]
      },
      styleguide: {
        files: [
          {
            expand: true,
            cwd: 'styleguide',
            src: '**/*',
            dest: '_site/styleguide'
          }
        ]
      },
      bower: {
        files: [
          {expand: true, cwd: '_bower_components/modernizr', src: 'modernizr.js', dest: '_site/js/partials/modernizr'}
        ]
      }
    },

    // Generates a automatic styleguide using kss-node
    styleguide: {
      options: {
        framework: {
          name: 'kss'
        },
        template: {
          src: 'kss-node-templates/kss-node-template-2'
        }
      },
      dist: {
        files: {
          'styleguide': '.tmp/css/style.css'
        }
      }
    }
  });

  // Define Tasks
  grunt.registerTask('build', [
    'compass:dev',
    'autoprefixer:dev',
    'copy:styleguide_doc',
    'styleguide',
    'jekyll',
    'copy:css_dev',
    'copy:bower'
  ]);

  grunt.registerTask('direct', [
    'build',
    'browserSync',
    'watch:sass_direct'
  ]);

  grunt.registerTask('default', [
    'build',
    'browserSync',
    'watch:sass',
    'watch:jekyll'
  ]);
};
