$(function(){

    var model = {
    	currentCat: null,
        adminViewShowing: false,
    	cats: [
        	{
            	'name': "Snickers",
				'src': 'images/catPhoto1.jpg',
                'url': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
				'clicks': 0
			},
			{
				'name': "Chewie",
				'src': 'images/catPhoto2.jpg',
                'url': 'https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg',
				'clicks': 0
			},
			{
				'name': "Ellie",
				'src': 'images/catPhoto3.jpg',
                'url': 'https://cdn.britannica.com/s:300x500/67/197567-131-1645A26E.jpg',
				'clicks': 0
			},
			{
				'name': "Jonah",
				'src': 'images/catPhoto4.jpg',
                'url': 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn8.bigcommerce.com%2Fs-rj0z9yqukq%2Fimages%2Fstencil%2Foriginal%2Fuploaded_images%2Fsayslove.jpg%3Ft%3D1518480203&imgrefurl=https%3A%2F%2Fwww.jacksongalaxy.com%2Fblog%2Fdo-you-understand-how-your-cat-says-i-love-you-%2F&docid=4R-B0xH_V84n_M&tbnid=0jfQp_z8TBGzfM%3A&vet=1&w=1080&h=610&bih=789&biw=1440&ved=0ahUKEwjFsYfPydrgAhUTyYMKHaPbCvoQMwibASglMCU&iact=c&ictx=1',
				'clicks': 0
			},
			{
				'name': "Charlie",
				'src': 'images/catPhoto5.jpg',
                'url': 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiCxNT0ytrgAhWlpYMKHQEpDOIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.adoptapet.com%2Fcat-adoption&psig=AOvVaw3Isx5-rLyp8n5gDpX-swPe&ust=1551310910323813',
				'clicks': 0
			}
    	]
    };

    var octopus = {
    	init: function() {
            if(model.currentCat == null){
                model.currentCat = model.cats[0];
                view.init();
            }
            console.log("octopus init");
        },
        getCurrentCat: function(){
        	return model.currentCat;
        },
        setCurrentCat: function(cat) {
        	model.currentCat = cat;
            view.render();
        },
        getCats: function() {
        	return model.cats;
        },
        incrementCounter: function() {
        	model.currentCat.clicks++;
            view.render();
        },
        getCat: function(name){
        	var data = model.cats;
        	for(var i = 0; i < data.length; i++){
        		if (data[i].name == name) {
        			return data[i]
        		}
        	}
        },
        isAdminViewShowing(){
            return model.adminViewShowing;
        },
        showAdminView(){
            model.adminViewShowing = true;
            view.render();
        },
        hideAdminView(){
            model.adminViewShowing = false;
            view.render();
        },
        updateCat(cat){
            var data = model.cats
            for(var i = 0; i < data.length; i++){
                if (data[i].src == cat.src) {
                    data[i] = cat;
                    model.currentCat = cat;
                }
            }
            view.render();
        }
    }

    var view = {
    	init: function() {
            this.catName = $('#catName');
            this.catImage = $('#catImage');
            this.counter = $('#counter');
            this.radioButton = $('input[type=radio][name=cat]');

            //admin page:
            this.adminButton = $('#admin');
            this.cancelEdit = $('#cancel');
            this.saveEdit = $('#submit-btn');
            this.adminForm = $('#admin-section');


            this.radioButton.change(function(){
				var chosenCat = octopus.getCat(this.value);
                console.log($('input[name=cat]:checked').val());
				octopus.setCurrentCat(chosenCat);
			}); 

			this.catImage.click(function(e) {
				octopus.incrementCounter();
			});

            this.adminButton.click(function(e){
                var currentCat = octopus.getCurrentCat();
                $('#name').val(currentCat.name);
                $('#url').val(currentCat.url);
                $('#clicks').val(currentCat.clicks);
                octopus.showAdminView();
            });

            this.cancelEdit.click(function(e){
                octopus.hideAdminView();
            });

            this.saveEdit.click(function(){
                console.log("inside save submit");
                var cat = octopus.getCurrentCat();
                cat.name = $('#name').val();
                $('input[name=cat]:checked').val(cat.name);
                cat.url = $('#url').val();
                cat.clicks = $('#clicks').val();
                $('name').val = '';
                octopus.hideAdminView();
                octopus.updateCat(cat);
            });

			this.render();
        },
        render: function() {
        	var currentCat = octopus.getCurrentCat();

        	this.catName.text(currentCat.name);
			this.catImage.attr("src", currentCat.src);
			this.counter.text(currentCat.clicks);
            console.log(octopus.isAdminViewShowing());
            if (!octopus.isAdminViewShowing()) {
                this.adminForm.hide();
            }
            else{
                this.adminForm.show();
            }
        }

    }

    octopus.init();
	
});



