"use strict";

define(['jquery'], function ($) {
    var init = function () {
        $("#Container").html("This was changed by the about js");
    }

    return {
        init:init
    }
});