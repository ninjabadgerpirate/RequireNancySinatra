﻿define(['jquery', 'sammy', 'sammy.template'], function ($, Sammy) {
    "use strict";

    var $SammyContainer = $("#SammyContainer");
    var app = Sammy.apps.body;
    
    addRoute('Home/Index');
    addRoute('About/Index');

    function addRoute(url) {
        app.get('#/' + url, function (context) {
            context.render(url, function (output) {
                $SammyContainer.fadeOut(function () {
                    $SammyContainer.html(output);

                    $SammyContainer.fadeIn(function () {
                        require([url], function (page) {
                            page.init();
                        });
                    });
                });
            });
        });
    }

    app.run('/#/Home/Index');
});