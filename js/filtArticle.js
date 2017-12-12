$(document).ready(function(){




	$('body').on('click','.sort',function(){
		$rel = $(this).attr('rel');
		console.log($rel);
		$('.sort').removeClass('active');
		$(this).addClass('active');

		$('.grid-item').fadeOut(0);
		$('.sort-result-value').html($rel);
		if ($rel == 'all') {
			$('.grid-item').fadeIn(0);
		} else {
			$('.grid-item.'+$rel).fadeIn(0);
		};
	});
});
