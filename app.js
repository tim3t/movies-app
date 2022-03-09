$('#addBtn').on('click', function(e) {
	e.preventDefault();
	let title = $('#movieTitle').val();
	let rating = $('#movieRating').val();
	$('#movieList').append(`<li>${title} --> ${rating}</li><button>Remove</button>`);
});

$('#movieList').on('click', 'button', function() {
	$(this).prev().remove();
	$(this).remove();
});
