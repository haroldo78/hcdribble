define(function (require) {

	"use strict";
    var $    = require('jquery'),
    Backbone = require('backbone'),
    ShotView = require('../views/shot'),
    ListView = require('../views/list');

	var AppRouter = Backbone.Router.extend({

	    routes: {
	        "" : "listRoute",
	        "shots/:id" : "shotRoute",
	        "page/:id" : "pageRoute"
	    },

	    listRoute: function(){
			var view = new ListView();
	    	view.render();
	    },

	    shotRoute: function(id){
	    	console.log(id);
	    	var view = new ShotView();
	    	view.render(id);
	    },

	    pageRoute: function(id){
	    	console.log(id);
	    	var view = new ListView();
	    	view.render(id);
	    },

	    initialize: function(){
	    	console.log('Routes for hobbits');
	    }
	});

	var appRouter = new AppRouter();
	Backbone.history.start();

});