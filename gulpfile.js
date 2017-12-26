const gulp  = require('gulp');
const clean = require('gulp-clean');
const src   = `./src`;
const dist  = `./dist`;

gulp.task('clean', () => {
  return gulp.src(dist, { read: false }).pipe(clean());
});

gulp.task('copy', ['clean'], () => {
  return gulp
    .src([`${src}/**/*.{json,xml,opts,html,png,jpg,jpeg}`])
    .pipe(gulp.dest(dist));
});

gulp.task('default', ['copy']);