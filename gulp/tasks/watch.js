/**
 * Watch & initiate tasks with Gulp
 */

/**
 * Dependencies
 */

const gulp = require("gulp"),
watch = require("gulp-watch");

/**
 * Watches
 */

gulp.task("watch", () => {
    watch("./app/assets/styles/**/*.css", () => {
        gulp.start("styles");
    });
});
