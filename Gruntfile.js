module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //  Task converting scss/sass to css (expanded)
    sass: {
      dist: {
        options: { sourcemap: 'none', style: 'expanded' },
        files: [{
          expand: true,
          cwd: './src/scss',
          src: ['grid-layout.scss'],
          dest: './dist/css',
          ext: '.css'
        }]
      }
    },

    //  Minify css
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: './dist/css',
          src: ['*.css', '!*.min.css'],
          dest: './dist/css',
          ext: '.min.css'
        }]
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-cssmin')

  //  Register grunt task!
  grunt.registerTask('default', ['sass', 'cssmin'])
}
