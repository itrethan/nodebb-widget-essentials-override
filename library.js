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
		app = params.app;
		callback();
	};

	Widget.defineWidgets = function(widgets, callback) {
		async.waterfall([
			function(next) {
				async.map([
					{
						widget: "headline",
						name: "Headline",
						description: "Topic headline for the bbs",
						content: 'admin/headline'
					}
				], function(widget, next) {
					app.render(widget.content, {}, function(err, html) {
						widget.content = html;
						next(err, widget);
					});
				}, function(err, _widgets) {
					widgets = widgets.concat(_widgets);
					next(err, widgets);
				});
			}
		], callback);
	}

	Widget.renderHeadlineWidget = function(widget, callback) {
		var tid = widget.data.tid;
		topics.getTopicData (tid, function(err, data) {
			if (err) {
					return callback(err);
			}

			posts.getPostData(data.mainPid, function(err, postData) {
				if (err) {
					return callback(err);
				}
				data.mainPost = postData;
				app.render('widgets/headline', {
					topic: data,
					relative_path: nconf.get('relative_path')
				}, callback);
			});
		})
	}

	module.exports = Widget;
}(module));
