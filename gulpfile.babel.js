import gulp from 'gulp';
import clean from './gulp/tasks/clean.js';
import server from './gulp/tasks/server.js';
import config from './gulp/config.js';

config.setEnv();

export const build = gulp.series(
  clean,
);

export const watch = gulp.series(
  build,
  server,
);