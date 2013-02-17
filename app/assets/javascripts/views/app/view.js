Panex.Views.AppView = Backbone.Marionette.Layout.extend({
	template: JST['app/view'],
	events: {

	},

	regions: {
		table: "#table-container"
	},

	initialize: function() {
		
	},
	
	onRender: function() {
		console.log("[AppView] OnRender");
		this.loadApps();
	},

	loadApps: function() {
		var appCollection = new Panex.Collections.AppCollection([{name:'Mohit'}, {name:'Mark'}]);
		var table = new Panex.Views.AppTable({
			collection: appCollection,
			itemView: Panex.Views.AppRow
		});
		this.table.show(table);
		console.log("[AppView] loadApps");
	}
});