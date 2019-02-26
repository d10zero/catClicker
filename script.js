var images = {}
var totalPhotos = 5
var img = {}
var names = new Array(totalPhotos)



function loadCatPhoto(name) {
	var $catName = $('#catName');
	var $catImage = $('#catImage');
	var $counter = $('#counter');
	var chosenCat = img[name]
	$catName.text(name);
	$catImage.attr("src", chosenCat.src);
	$counter.text(chosenCat.clicks);

}

$(document).ready(function() {
	var totalPhotos = 5
	
	var names = new Array(totalPhotos)

	names[0] = 'Snickers';
	names[1] = 'Chewie';
	names[2] = 'Ellie';
	names[3] = 'Jonah';
	names[4] = 'Charlie';


	img['Snickers'] = {
		'src': 'images/catPhoto1.jpg',
		'clicks': 0
	};

	img['Chewie'] = {
		'src': 'images/catPhoto2.jpg',
		'clicks': 0
	};

	img['Ellie'] = {
		'src': 'images/catPhoto3.jpg',
		'clicks': 0
	};

	img['Jonah'] = {
		'src': 'images/catPhoto4.jpg',
		'clicks': 0
	};

	img['Charlie'] = {
		'src': 'images/catPhoto5.jpg',
		'clicks': 0
	};
	

	$('input[type=radio][name=cat]').change(function(){
	    loadCatPhoto(this.value)
	}); 

	$('#catImage').click(function(e) {
		var name = $('#catName').text()
		var $counter = $('#counter')
		img[name].clicks = img[name].clicks + 1
		$counter.text(img[name].clicks);
	});

});



