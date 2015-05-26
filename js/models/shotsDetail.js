define(function (require) {

	"use strict";
    var $    = require('jquery'),
    Backbone = require('backbone');

	var ShotDetails = Backbone.Model.extend({
		defaults:{
			
		},

		initialize: function(){
			console.log('Im a Shot Bitch! Initializing Shot Detail Model');
		}

	});


	return ShotDetails;

});