function main() {
	var docTop;
	$('.article').scrollTop(200);
	$(document).on('scroll', function() {
		docTop = $(document).scrollTop();
		console.log($(document).scrollTop());
		$('.hero').css({
			"top": -(docTop * 0.3)
		});
	});
}
