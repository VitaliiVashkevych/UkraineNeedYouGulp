import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import gulp from 'gulp';

// export const ttfToWoff = () => {
//   return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, { encoding: false })
//     .pipe(app.plugins.plumber(
//       app.plugins.notify.onError({
//         title: "FONTS",
//         message: "Error: <%= error.message %>"
//       })
//     ))
//     .pipe(fonter({
//       formats: ['woff']
//     }))
//     .pipe(app.gulp.dest(`${app.path.build.fonts}`))
//     .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`), { encoding: false })
//     .pipe(ttf2woff2())
//   .pipe(app.gulp.dest(`${app.path.build.fonts}`))
// }