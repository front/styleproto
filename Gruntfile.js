module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    path: {
      app: 'app',
      dist: 'dist'
    },

    jekyll: {
      build: {
        dest: '_site'
      }
    },

    compass: {
      dist: {
        config: {
          sassDir: '_sass',
          cssDir: '.tmp/css'
        }
      }
    }
  });

  // Define Tasks
  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
