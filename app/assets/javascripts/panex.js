window.Panex = new Backbone.Marionette.Application({
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
});

Panex.addRegions({
	mainContent: '#main-content',
	leftSidebar: '#nav-sidebar-left',
	rightSidebar: '#nav-sidebar-right',
	table: '#table-container'
});

Panex.addInitializer(function(options) {
	Panex.router = new Panex.Routers.Router();
	Backbone.history.start();
});


$(document).ready(function() {
	Panex.start();
});