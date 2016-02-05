var elixir = require('laravel-elixir');
require('laravel-elixir-imagemin');

var bower = './bower_components/';
var vendor = [
    bower + 'jquery/dist/jquery.js',
    bower + 'jquery.easing/js/jquery.easing.js',
    bower + 'bootstrap-sass/assets/javascripts/bootstrap.js',
    bower + 'sweetalert/dist/sweetalert.min.js',
    bower + 'jquery-form/jquery.form.js',
    bower + 'moment/moment.js'
];

elixir(function (mix) {

    ////////////////////////////////////////////////////////
    //////////////////////// BACK /////////////////////////
    //////////////////////////////////////////////////////
    mix.sass('back.scss');
    mix.scripts(vendor.concat([
        bower + 'bootstrap-daterangepicker/daterangepicker.js',
        bower + 'Chart.js/Chart.js',
        './resources/assets/js/back/**/*.js'
    ]), './public/js/back.js');

    ////////////////////////////////////////////////////////
    //////////////////////// FRONT ////////////////////////
    //////////////////////////////////////////////////////
    mix.sass('front.scss');
    mix.scripts(vendor.concat([
        './resources/assets/js/front/**/*.js'
    ]), './public/js/front.js');

    /////////////////////////////////////////////////////////
    //////////////////////// IMAGES ////////////////////////
    ///////////////////////////////////////////////////////
    mix.imagemin();

    //////////////////////////////////////////////////////////
    //////////////////////// VERSION ////////////////////////
    ////////////////////////////////////////////////////////
    mix.version([
        'css/*.css',
        'js/*.js',
    ]);

    ///////////////////////////////////////////////////////
    //////////////////////// COPY ////////////////////////
    /////////////////////////////////////////////////////
    mix.copy(bower + 'font-awesome/fonts', './public/build/fonts/');
    mix.copy('./public/img', './public/build/img/');
});