"use strict";

define(['jquery'], function ($) {
    var init = function () {
        $("#Container").html("This was changed by the home.js");
    }

    return {
        init: init
    }
});