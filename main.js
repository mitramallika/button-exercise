$(document).ready(function () {
	$('#button-img-1').prop('disabled', true);
	$('.cool-button').on("click", function (e) {
		e.preventDefault();
		$('.cool-button').prop('disabled', false);
		$(this).prop('disabled', true);
		var myInfo = $(this),
			myUrl = myInfo.data('image');
		$('#aids-img').attr('src', myUrl);
	});
});