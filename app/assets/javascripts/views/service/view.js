Panex.Views.ServiceView = Backbone.Marionette.Layout.extend({
	template: JST['service/view'],
	events: {

	},

	regions: {
		table: "#table-container"
	},

	initialize: function() {
		
	},
	
	onRender: function() {
		console.log("[ServiceView] OnRender");
		this.loadServices();
	},

	loadServices: function() {
		var serviceCollection = new Panex.Collections.ServiceCollection([{name:'Mohit'}, {name:'Mark'}]);
		var table = new Panex.Views.ServiceTable({
			collection: serviceCollection,
			itemView: Panex.Views.ServiceRow
		});
		this.table.show(table);
		console.log("[ServiceView] loadServices");
	}
});