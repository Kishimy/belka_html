const gulp = require('gulp');
const pug2html = require('./gulp/tasks/pug2html')
module.exports.start = gulp.series(pug2html)
const style = require('./gulp/tasks/styles')
module.exports.style = gulp.series(style)
const script = require('./gulp/tasks/script')
module.exports.script = gulp.series(script)