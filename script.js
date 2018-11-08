"use strict";

jQuery(document).ready(function ($) {
  
    $(".pill").click(function() {

        $(".pill").removeClass("active");
        $("#" + $(this).attr("id")).addClass("active");

        $(".tab-content").css("display", "none");
        $("#" + $(this).attr("name")).css("display", "block");

    });

    $("#option1").trigger("click");

});