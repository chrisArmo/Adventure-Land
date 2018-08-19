/**
 * Style tasks with Gulp
 */

/**
 * Dependencies
 */

const gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import"),
mixins = require("postcss-mixins");
 
/**
 * Tasks
 */
 
gulp.task("styles", () => {
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
        .on("error", function(err) {
            console.log(err.toString());
            this.emit("end");
        })
        .pipe(gulp.dest("./app/temp/styles"));
});
