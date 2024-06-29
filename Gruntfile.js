module.exports = function (grunt) {

  //初始化配置
  grunt.initConfig({
    livereload: {
      options: {
        base: 'public',
      },
      files: ['src/**/*']
    },
    watch: {
      all: {
        files: ['src/js/touch.js', 'src/sass/*.scss', '_site/*'],
        tasks: ['jshint', 'compass:dev'],
      },
    },
    //grunt watch:js|css
    js: {
      files: ['src/js/touch.js', '_config.yml'],
      tasks: ['jshint'],
    },
    css: {
      files: ['src/sass/*.scss'],
      tasks: ['compass:dev'],
    },
  });

  grunt.loadNpmTasks('grunt-livereload');

  grunt.registerTask('live', ['livereload', 'watch:css'], 'jekyll serve --livereload');
}
