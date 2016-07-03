$('.wiki-fn-content').each(function(i, v) {
	$('<span></span>').addClass('wiki-fn-content').html($($(v).attr('href')).parent().clone().html().replace(/.+?<\/a>/, '')).insertAfter($(v));
});

