require.config({
    paths: {
        'app': '../app/app',
        'routes': '../app/routes',

        'bootstrap': '../../Lib/bootstrap/js/bootstrap.min',
        'jquery': '../../Lib/jquery/jquery.min',
        'sammy': '../../Lib/sammy/sammy',
        'sammy.template': '../../Lib/sammy/sammy.template'
    },
    shim: {
        "bootstrap": ["jquery"],
        'sammy': { deps: ['jquery'], exports: 'Sammy' } ,
        'sammy.template': { deps: ['sammy']},
        'routes': { deps: ['sammy.template'] }
    },   

    // kick start application
    deps: ['app']
});