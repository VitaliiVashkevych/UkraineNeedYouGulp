import gulp from "gulp";
import config from "./gulp/config.js";

config.setEnv();

gulp.task('build', () => {
  console.log(config.isProd);
})

gulp.task('watch', () => {
  console.log(config.isProd);
})
