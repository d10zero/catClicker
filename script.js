$(function(){

    var model = {
    	currentCat: null,
    	cats: [
        	{
            	'name': "Snickers",
				'src': 'images/catPhoto1.jpg',
				'clicks': 0
			},
			{
				'name': "Chewie",
				'src': 'images/catPhoto2.jpg',
				'clicks': 0
			},
			{
				'name': "Ellie",
				'src': 'images/catPhoto3.jpg',
				'clicks': 0
			},
			{
				'name': "Jonah",
				'src': 'images/catPhoto4.jpg',
				'clicks': 0
			},
			{
				'name': "Charlie",
				'src': 'images/catPhoto5.jpg',
				'clicks': 0
			}
    	]
    };

    var octopus = {
    	init: function() {
    		model.currentCat = model.cats[0];
            view.init();
        },
        getCurrentCat: function(){
        	return model.currentCat;
        },
        setCurrentCat: function(cat) {
        	model.currentCat = cat;
        },
        getCats: function() {
        	return model.cats;
        },
        incrementCounter: function() {
        	model.currentCat.clicks++;
        },
        getCat: function(name){
        	var data = model.cats
        	for(var i = 0; i < data.length; i++){
        		if (data[i].name == name) {
        			return data[i]
        		}
        	}
        },
    }

    var view = {
    	init: function() {
            this.catName = $('#catName');
            this.catImage = $('#catImage');
            this.counter = $('#counter');
            this.radioButton = $('input[type=radio][name=cat]');


            this.radioButton.change(function(){
				var chosenCat = octopus.getCat(this.value);
				octopus.setCurrentCat(chosenCat);
				$('#catName').text(chosenCat.name);
				$('#catImage').attr("src", chosenCat.src);
				$('#counter').text(chosenCat.clicks);
			}); 

			this.catImage.click(function(e) {
				octopus.incrementCounter();
                $('#counter').text(octopus.getCurrentCat().clicks);
			});

			this.render();
        },
        render: function() {
        	var currentCat = octopus.getCurrentCat();
        	this.catName.text(currentCat.name);
			this.catImage.attr("src", currentCat.src);
			this.counter.text(currentCat.clicks);
        }

    }

	octopus.init();
});


