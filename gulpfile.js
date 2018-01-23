var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function(){
  console.log("===-------> Lancement de la tache");
});

gulp.task('html', function(){
  console.log('===-------> Travail sur le HTML');
});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });
});
