/**
 * Created by KevinDevelop on 25.05.2015.
 */
'use strict';

var gulp = require('gulp'),
//l�dt alle plugins die mit gulp in pachage.josn mit gulp beginnen. Werden erst dann geladen wenn . Operator aufgerufen wird. Rest m�ssen wir mit require machen
//plugins = require('gulp-load-plugins')(),
    webserver = require('gulp-webserver');


// webserver hochfahren
// in Eckigen Klammer, das was vorher gemacht werden sollen (also andere tasks), bevotr webserver task gestartet wird
// [] Ausf�hrungsreihenfolge: parallel! --> schneller In Grunt m�sste man das konfigurieren
gulp.task('webserver', function () {
    // welche Dateien

    // gulp oben definiert, src na klar die Quelle also im build ordner
    gulp.src('app')
        // pipe ist wie das builderPattern
        .pipe(webserver({
            host: '0.0.0.0',
            port: 9443,
            livereload: true
        }));
});