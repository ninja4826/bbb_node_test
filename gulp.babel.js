import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('babel', () => {
    gulp.src('src/**/*.js').pipe(babel()).pipe(gulp.dest('dist'));
});
