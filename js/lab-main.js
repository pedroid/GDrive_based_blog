$(document).ready(function(){
	//getMemebr;
	$.ajax({
		url: "http://lab.25sprout.com/avatar/apo/25sproutMember.php",
		type: "GET",
		dataType: "json",
		success: function(data) {
			console.log(data['staffs']);
			$.each(data['staffs'],function(key,val){
				$newSortIcon = $('<div class="sort" rel=""></div>');
				$newSortIcon.addClass(key.toLowerCase());
				$newSortIcon.attr('rel',key.toLowerCase());
				$newSortIcon.css('background-image','url("'+val['pic']['small']+'")');

				$('.sort-wrapper-sprouts').append($newSortIcon);
			});
		},
		error: function(xhr, err) {
		}
	});

	//?????����?
	//var grid_color = ["green","blue","yellow","orange","red","pink"];
	var grid_color = ["dodger", "blue"];
	$('.grid-item').each(function(index){
		//???��???
		var num_color = grid_color.length;
		var grid_color_index = index%num_color;
		$(this).addClass('grid-item-'+grid_color[grid_color_index]);

		//確�??????????縮�????
		var hasThumb = $('.grid-item:eq('+index+') .thumb-title').children("img").length;
		if ( hasThumb == 0){
			//????����???????
			var title = $('.grid-item:eq('+index+') .description .item-title').text();
			title = title.substring(0,1);
			$('.grid-item:eq('+index+') .thumb-title').html(title);
		}
	});

	//篩�??
	$('body').on('click','.sort',function(){
		$rel = $(this).attr('rel');
		console.log($rel);
		$('.sort').removeClass('active');
		$(this).addClass('active');

		$('.grid-item').fadeOut(100);
		$('.sort-result-value').html($rel);
		if ($rel == 'all') {
			$('.grid-item').fadeIn(500);
		} else {
			$('.grid-item.'+$rel).fadeIn(500);
		};
	});
});
