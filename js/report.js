$(document).ready(function() {
    $("input").click(function() {
        if ($(this).hasClass("no")) {
            $(this).parent().parent().find("textarea").show("fast")
        }
        else if ($(this).hasClass("yes")) {
            $(this).parent().parent().find("textarea").hide("fast")
        }
    });
});