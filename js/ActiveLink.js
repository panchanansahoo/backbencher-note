$(document).ready(function() {
    var url = window.location.href;
    var urlArr = url.split('=').reverse();

    var selectVal = '';
    var optVal = null;
    $('.first select option').each(function() {
        optVal = $(this).val().split('=').reverse();
        if (optVal[0] == urlArr[0]) {
            selectVal = $(this).val();
        }
    });
    $('.first select').val(selectVal);

    $('.second select option').each(function() {
        optVal = $(this).val().split('=').reverse();
        if (optVal[1] == urlArr[1]) {
            selectVal = $(this).val();
        }
    });
    $('.second select').val(selectVal);

});

$(document).ready(function() {
    var url = window.location.href;
    var urlArr = url.split('/').reverse();

    $('.third select').val(urlArr[0]);

    $('.actlink li').each(function() {
        if ($(this).find('a').attr('href') == urlArr[0]) {
            $('.actall').removeClass('actall');
            $(this).addClass('actall');
        }
    });
});


$(document).ready(function() {
    var url = window.location.href;
    var urlArr = url.split('=').reverse();

    $('.actlink1 li').each(function() {
        aLink = $(this).find('a').attr('href').split('=').reverse();        
        if (aLink[1] == urlArr[1]) {
            $('.actall').removeClass('actall');
            $(this).addClass('actall');
        }
    });
});



