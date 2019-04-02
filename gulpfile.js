//imports the gulp package in the node module
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//create a gulp task and call ti from the command line 

gulp.task('browser-sync',function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    //watches if any changes done in the html file and the css file mentioned in the base directory
    //and relods the browser when the change is done 
    gulp.watch(["./*.html", "./css/*.css"]).on('change', browserSync.reload)
    // run the command gulp browser-sync in the terminal
})
