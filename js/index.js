$(document).ready(function () {
    var showTopRated = false;
    var showNewest = false;
    var showMostReviewed = false;

    $('#toggle-link1').on('click', function(event) {
        showTopRated = !showTopRated;
        if (showTopRated) {
            $('#toggle-link1').text('SHOW LESS');
            $('#toggle-paragraph1').show();
        } else {
            $('#toggle-link1').text('SHOW MORE');
            $('#toggle-paragraph1').hide();
        }
    });

        $('#toggle-link2').on('click', function(event) {
        showNewest = !showNewest;
        if (showNewest) {
            $('#toggle-link2').text('SHOW LESS');
            $('#toggle-paragraph2').show();
        } else {
            $('#toggle-link2').text('SHOW MORE');
            $('#toggle-paragraph2').hide();
        }
    });

    $('#toggle-link3').on('click', function(event) {
        showMostReviewed = !showMostReviewed;
        if (showMostReviewed) {
            $('#toggle-link3').text('SHOW LESS');
            $('#toggle-paragraph3').show();
        } else {
            $('#toggle-link3').text('SHOW MORE');
            $('#toggle-paragraph3').hide();
        }
    });
});