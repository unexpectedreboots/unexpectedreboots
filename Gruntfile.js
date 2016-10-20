module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodemon: {
      dev: {
        script: 'index.js'
      }
    },
    
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    eslint: {
      target: [
        '*.js',
        'client/**/*.js',
        'server/**/*.js',
        'spec/**/*.js',
        'extension/**/*.js'
      ]
    },

    shell: {
      repoPush: {
        command: 'git add -A && git commit && git push origin master'
      }
      upstream: {
        command: 'git pull upstream master'
      }
    }

  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('push', [
    'eslint', 'shell:repoPush'
  ]);

  grunt.registerTask('upstream', [
    'shell:upstream'
  ]);

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('build', [
    'eslint', 'mochaTest'
  ]);

};

