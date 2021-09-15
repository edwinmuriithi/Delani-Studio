// Design Image JS

$(document).ready(function() {
    $("#design-image").click(function() {
        $("#design-image").slideDown('1500').hide('1000');
        $("#design").show('1500');
    });
    $("#design").click(function() {
        $("#design").slideUp('1500');
        $("#design-image").slideDown('1500');
    });
});