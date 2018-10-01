$('.wiki-fn-content').each(function(i, v) {
    $('<sup></sup>').html($($(v).attr('href')).parent().clone().html().replace(/.+?<\/a>/, '')).insertAfter($(v));
});