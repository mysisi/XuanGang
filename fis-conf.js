fis.hook('module', {
    baseUrl: '.',

    paths: {
        jquery: 'static/libs/jquery/jquery-3.0.0.js',
        cookie:'static/libs/jquery/jquery.cookie.js',
        validate:'static/libs/jquery/jquery.validate.js',
        metadata:'static/libs/jquery/jquery.metadata.js',
        bootstrap:'static/libs/bootstrap'
    }
});

fis.match('*', {
    useHash: false
});

fis.match('::packager', {
    postpackager: fis.plugin('loader', {
    })
});

//fis.media("debug").match('**', {
//    domain: 'http://127.0.0.1:8080'
//});

//fis.media("prod").match('static/**', {
//    domain: 'http://202.204.54.95:8080'
//});
