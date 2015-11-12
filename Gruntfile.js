module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js', 
        'src/*.js', 
        'spec/*.js'
      ] 
    },
    jasmine: {
      src: 'src/*.js',
      options: {
        specs: 'spec/*.js',
        vendor: 'lib/scripts/*.js',
        styles: 'lib/css/*.css',
        display: 'full',
        summary: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['jasmine']);

};
