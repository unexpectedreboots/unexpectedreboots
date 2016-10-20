'use strict';

module.exports = function (grunt) {

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
      target: ['*.js', 'client/**/*.js', 'server/**/*.js', 'spec/**/*.js', 'extension/**/*.js']
    },

    shell: {
      repoPush: {
        command: 'git add -A && git commit && git push origin master'
      },
      upstream: {
        command: 'git pull upstream master'
      }
    }

  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('push', ['eslint', 'shell:repoPush']);

  grunt.registerTask('upstream', ['shell:upstream']);

  grunt.registerTask('test', ['mochaTest']);

  grunt.registerTask('build', ['eslint', 'mochaTest']);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0dydW50ZmlsZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZ3J1bnQiLCJpbml0Q29uZmlnIiwicGtnIiwiZmlsZSIsInJlYWRKU09OIiwibm9kZW1vbiIsImRldiIsInNjcmlwdCIsIm1vY2hhVGVzdCIsInRlc3QiLCJvcHRpb25zIiwicmVwb3J0ZXIiLCJzcmMiLCJlc2xpbnQiLCJ0YXJnZXQiLCJzaGVsbCIsInJlcG9QdXNoIiwiY29tbWFuZCIsInVwc3RyZWFtIiwibG9hZE5wbVRhc2tzIiwicmVnaXN0ZXJUYXNrIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCLFVBQVNDLEtBQVQsRUFBZ0I7O0FBRS9CQSxRQUFNQyxVQUFOLENBQWlCO0FBQ2ZDLFNBQUtGLE1BQU1HLElBQU4sQ0FBV0MsUUFBWCxDQUFvQixjQUFwQixDQURVOztBQUdmQyxhQUFTO0FBQ1BDLFdBQUs7QUFDSEMsZ0JBQVE7QUFETDtBQURFLEtBSE07O0FBU2ZDLGVBQVc7QUFDVEMsWUFBTTtBQUNKQyxpQkFBUztBQUNQQyxvQkFBVTtBQURILFNBREw7QUFJSkMsYUFBSyxDQUFDLGNBQUQ7QUFKRDtBQURHLEtBVEk7O0FBa0JmQyxZQUFRO0FBQ05DLGNBQVEsQ0FDTixNQURNLEVBRU4sZ0JBRk0sRUFHTixnQkFITSxFQUlOLGNBSk0sRUFLTixtQkFMTTtBQURGLEtBbEJPOztBQTRCZkMsV0FBTztBQUNMQyxnQkFBVTtBQUNSQyxpQkFBUztBQURELE9BREw7QUFJTEMsZ0JBQVU7QUFDUkQsaUJBQVM7QUFERDtBQUpMOztBQTVCUSxHQUFqQjs7QUF1Q0FqQixRQUFNbUIsWUFBTixDQUFtQixhQUFuQjtBQUNBbkIsUUFBTW1CLFlBQU4sQ0FBbUIsY0FBbkI7QUFDQW5CLFFBQU1tQixZQUFOLENBQW1CLGtCQUFuQjtBQUNBbkIsUUFBTW1CLFlBQU4sQ0FBbUIsZUFBbkI7O0FBRUFuQixRQUFNb0IsWUFBTixDQUFtQixNQUFuQixFQUEyQixDQUN6QixRQUR5QixFQUNmLGdCQURlLENBQTNCOztBQUlBcEIsUUFBTW9CLFlBQU4sQ0FBbUIsVUFBbkIsRUFBK0IsQ0FDN0IsZ0JBRDZCLENBQS9COztBQUlBcEIsUUFBTW9CLFlBQU4sQ0FBbUIsTUFBbkIsRUFBMkIsQ0FDekIsV0FEeUIsQ0FBM0I7O0FBSUFwQixRQUFNb0IsWUFBTixDQUFtQixPQUFuQixFQUE0QixDQUMxQixRQUQwQixFQUNoQixXQURnQixDQUE1QjtBQUlELENBOUREIiwiZmlsZSI6IkdydW50ZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZ3J1bnQpIHtcblxuICBncnVudC5pbml0Q29uZmlnKHtcbiAgICBwa2c6IGdydW50LmZpbGUucmVhZEpTT04oJ3BhY2thZ2UuanNvbicpLFxuXG4gICAgbm9kZW1vbjoge1xuICAgICAgZGV2OiB7XG4gICAgICAgIHNjcmlwdDogJ2luZGV4LmpzJ1xuICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgbW9jaGFUZXN0OiB7XG4gICAgICB0ZXN0OiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICByZXBvcnRlcjogJ3NwZWMnXG4gICAgICAgIH0sXG4gICAgICAgIHNyYzogWyd0ZXN0LyoqLyouanMnXVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlc2xpbnQ6IHtcbiAgICAgIHRhcmdldDogW1xuICAgICAgICAnKi5qcycsXG4gICAgICAgICdjbGllbnQvKiovKi5qcycsXG4gICAgICAgICdzZXJ2ZXIvKiovKi5qcycsXG4gICAgICAgICdzcGVjLyoqLyouanMnLFxuICAgICAgICAnZXh0ZW5zaW9uLyoqLyouanMnXG4gICAgICBdXG4gICAgfSxcblxuICAgIHNoZWxsOiB7XG4gICAgICByZXBvUHVzaDoge1xuICAgICAgICBjb21tYW5kOiAnZ2l0IGFkZCAtQSAmJiBnaXQgY29tbWl0ICYmIGdpdCBwdXNoIG9yaWdpbiBtYXN0ZXInXG4gICAgICB9LFxuICAgICAgdXBzdHJlYW06IHtcbiAgICAgICAgY29tbWFuZDogJ2dpdCBwdWxsIHVwc3RyZWFtIG1hc3RlcidcbiAgICAgIH1cbiAgICB9XG5cbiAgfSk7XG5cbiAgZ3J1bnQubG9hZE5wbVRhc2tzKCdncnVudC1zaGVsbCcpO1xuICBncnVudC5sb2FkTnBtVGFza3MoJ2dydW50LWVzbGludCcpO1xuICBncnVudC5sb2FkTnBtVGFza3MoJ2dydW50LW1vY2hhLXRlc3QnKTtcbiAgZ3J1bnQubG9hZE5wbVRhc2tzKCdncnVudC1ub2RlbW9uJyk7XG5cbiAgZ3J1bnQucmVnaXN0ZXJUYXNrKCdwdXNoJywgW1xuICAgICdlc2xpbnQnLCAnc2hlbGw6cmVwb1B1c2gnXG4gIF0pO1xuXG4gIGdydW50LnJlZ2lzdGVyVGFzaygndXBzdHJlYW0nLCBbXG4gICAgJ3NoZWxsOnVwc3RyZWFtJ1xuICBdKTtcblxuICBncnVudC5yZWdpc3RlclRhc2soJ3Rlc3QnLCBbXG4gICAgJ21vY2hhVGVzdCdcbiAgXSk7XG5cbiAgZ3J1bnQucmVnaXN0ZXJUYXNrKCdidWlsZCcsIFtcbiAgICAnZXNsaW50JywgJ21vY2hhVGVzdCdcbiAgXSk7XG5cbn07XG5cbiJdfQ==