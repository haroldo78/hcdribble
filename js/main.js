define(function (require) {

	"use strict";
    var $    = require('jquery'),
    Backbone = require('backbone'),
    Handlebars = require('handlebars'),
    ShotsModel = require('../models/shots');

	console.log('A Lannister always pays his debts..');

	Handlebars.registerHelper('everyNth', function(context, every, options) {
	  var fn = options.fn, inverse = options.inverse;
	  var ret = "";
	  if(context && context.length > 0) {
	    for(var i=0, j=context.length; i<j; i++) {
	      var modZero = i % every === 0;
	      ret = ret + fn(_.extend({}, context[i], {
	        isModZero: modZero,
	        isModZeroNotFirst: modZero && i > 0,
	        isLast: i === context.length - 1
	      }));
	    }
	  } else {
	    ret = inverse(this);
	  }
	  return ret;
	});

	Handlebars.registerHelper('times', function(n, block) {
	    var accum = '';
	    for(var i = 1; i <= n; ++i)
	        accum += block.fn(i);
	    return accum;
	});


});