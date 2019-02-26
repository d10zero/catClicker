$(function(){

    var model = {
        init: function() {
        	if (!localStorage.cats) {
                localStorage.cats = JSON.stringify([]);
            }
        	var data = JSON.parse(localStorage.cats);
            data.push({
            	'name': "Snickers",
				'src': 'images/catPhoto1.jpg',
				'clicks': 0
			});

			data.push({
				'name': "Chewie",
				'src': 'images/catPhoto2.jpg',
				'clicks': 0
			});

			data.push({
				'name': "Ellie",
				'src': 'images/catPhoto3.jpg',
				'clicks': 0
			});

			data.push({
				'name': "Jonah",
				'src': 'images/catPhoto4.jpg',
				'clicks': 0
			});

			data.push({
				'name': "Charlie",
				'src': 'images/catPhoto5.jpg',
				'clicks': 0
			});
			localStorage.cats = JSON.stringify(data);
        },
        getAllCats: function() {
            return JSON.parse(localStorage.cats);
        },
        updateCats: function(cats) {
        	localStorage.cats = JSON.stringify(cats);
        }
    };

    var octopus = {
    	init: function() {
            model.init();
            view.init();
        },
        getCat: function(name){
        	var data = model.getAllCats()
        	for(var i = 0; i < data.length; i++){
        		if (data[i].name == name) {
        			return data[i]
        		}
        	}
        },
        updateCatClicks: function(cat){
        	console.log(cat)
        	var data = model.getAllCats()
        	for(var i = 0; i < data.length; i++){
        		if (data[i].name == cat.name) {
        			data[i].clicks = cat.clicks + 1;
        			model.updateCats(data);
        		}
        	}
        }
    }

    var view = {
    	init: function() {
            var catName = $('#catName');
            var catImage = $('#catImage');
            var counter = $('#counter');
            var radioButton = $('input[type=radio][name=cat]');


            radioButton.change(function(){
				var chosenCat = octopus.getCat(this.value);
				catName.text(this.value);
				catImage.attr("src", chosenCat.src);
				counter.text(chosenCat.clicks);
			}); 

			catImage.click(function(e) {
				var name = catName.text()
				var cat = octopus.getCat(name);
				console.log(cat.clicks)
				octopus.updateCatClicks(cat);
				counter.text(cat.clicks + 1);
			});
        }

    }

	octopus.init();
});


