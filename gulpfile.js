var gulp = require('gulp');
var clean = require('gulp-clean');
var notify = require('gulp-notify');
var rimraf = require('rimraf').sync;
var size = require('gulp-size');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var nano = require('cssnano');
var mqpacker = require('css-mqpacker');
var cheerio = require('gulp-cheerio');
var panini = require('panini');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;




/* ==========================================================================
   SERVE
========================================================================== */
gulp.task('serve', function() {
  return browserSync.init({
    server: {
      baseDir: 'docs/'
    },
    directory: false,
    scroll: true,
    injectChanges: true,
    open: false,
    files: ["docs/css/btn.css"],
  });
});



/* ==========================================================================
   CLEAN
========================================================================== */
 /*
   clean
     copy over scripts that don't need to be processed
========================================================================== */
gulp.task('clean', function() {
  rimraf('docs');
});

/* ==========================================================================
   SASS
========================================================================== */
gulp.task('sass', function() {

    var sassOptions = {
      errLogToConsole: true,
      outputStyle: 'expanded',
    };
    // TWBS 3 Browser Support
    // https://github.com/twbs/bootstrap/blob/master/grunt/configBridge.json#L20
    var autoprefixerOptions = {
			browsers: [
        //
        // Official browser support policy:
        // https://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#supported-browsers
        //
        'Chrome >= 45', // Exact version number here is kinda arbitrary
        'Firefox ESR',
        // Note: Edge versions in Autoprefixer & Can I Use refer to the EdgeHTML rendering engine version,
        // NOT the Edge app version shown in Edge's "About" screen.
        // For example, at the time of writing, Edge 20 on an up-to-date system uses EdgeHTML 12.
        // See also https://github.com/Fyrd/caniuse/issues/1928
        'Edge >= 12',
        'Explorer >= 10',
        // Out of leniency, we prefix these 1 version further back than the official policy.
        'iOS >= 9',
        'Safari >= 9',
        // The following remain NOT officially supported, but we're lenient and include their prefixes to avoid severely breaking in them.
        'Android >= 4.4',
        'Opera >= 30'
      ]
		};
    var mqpackerOptions = {
      sort: true
    };
		var nanoOptions = {
			core              :true,
			discardComments   :{removeAllButFirst: true},
			safe              :true,
			zindex            :false
		};


  var stream = gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions)
      .on("error", notify.onError({
          message: "Error: <%= error.message %>",
          title: "Sass Error",
          sound: false
      })
    ))

		.pipe(
				postcss([
					autoprefixer(autoprefixerOptions),
					mqpacker(mqpackerOptions),
					nano(nanoOptions)
				])
			)
    .pipe(sourcemaps.write('../maps/'))
    .pipe(gulp.dest('./docs/assets/css/'))
    .pipe(
      reload({
          stream: true,
          match: '**/*.css'
        }
      )
    );
});





/* ==========================================================================
   PAGES/TEMPLATES
========================================================================== */

/*
  templating with zurb's panini
    Docs: http://foundation.zurb.com/sites/docs/panini.html
    Repo: https://github.com/zurb/panini
  ========================================================================== */
gulp.task('pages', function(){
  return gulp.src('src/templates/pages/**/*.{html,hbs,handlebars}')
    .pipe(panini({
      root: 'src/templates/pages/',
      layouts: 'src/templates/layouts/',
      partials: 'src/templates/partials/',
      helpers: 'src/templates/helpers/',
      data: 'src/templates/data/'
    }))
    .pipe(gulp.dest('docs'))
});

function pagesReset(done) {
  panini.refresh();
  done();
}

gulp.task('pages:reset', pagesReset);

// gulp.task('pages:build'), function() {
//   runSequence('pages:reset', 'pages');
// }

/* ==========================================================================
   WATCH
========================================================================== */
gulp.task('watch', function(){
  gulp.watch('src/scss/**/*', ['sass']);
  gulp.watch('src/templates/pages/**/*', function(){
    runSequence('pages:reset','pages',reload);
  });

  gulp.watch(['src/templates/{layouts,partials,helpers,data}/**/*'], function(){
    runSequence('pages:reset','pages',reload);
  });

});





// The default task when we run `gulp` for doing development
gulp.task('default', function(){
  runSequence(
    'clean',
    'sass',
    'pages',
    'serve',
    'watch'
  );
});
