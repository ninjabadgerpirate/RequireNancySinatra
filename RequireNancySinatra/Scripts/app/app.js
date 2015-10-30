define(['jquery', 'sammy'], function ($, Sammy) {
    "use strict";

    var app = Sammy('body');
    app.use(Sammy.Template);

    var routes = require(["routes"]);
});