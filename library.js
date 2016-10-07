(function(module) {
	"use strict";

	var async = module.parent.require('async');
	var nconf = module.parent.require('nconf');
	var validator = module.parent.require('validator');
	var fs = require('fs');
	var path = require('path');
	var db = module.parent.require('./database');
	var categories = module.parent.require('./categories');
	var user = module.parent.require('./user');
	var plugins = module.parent.require('./plugins');
	var topics = module.parent.require('./topics');
	var posts = module.parent.require('./posts');
	var groups = module.parent.require('./groups');
	var translator = module.parent.require('../public/src/modules/translator');
	var templates = module.parent.require('templates.js');
	var websockets = module.parent.require('./socket.io');
	var app;

	var Widget = {
		templates: {}
	};

	Widget.init = function(params, callback) {
		console.log("Loaded node-widget-essentials-override plugin.");
		callback();
	};


	module.exports = Widget;
}(module));
