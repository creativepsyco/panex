Panex.Views.DataGrid = Backbone.Marionette.Layout.extend({
	template: JST['data/grid'],
	events: {

	},

	regions: {
		dataList: "#data-list"
	},

	ui: {
		dataList: "#data-list"
	},

	initialize: function() {
		console.log("[DataGrid] initialize");
		this.loadData();
	},
	
	onRender: function() {
		console.log("[DataGrid] OnRender");
		this.loadService();
	},

	loadData: function() {
		var dataCollection = new Panex.Collections.DataCollection([1,2]);
		var view = new Panex.Views.DataList({
			collection: dataCollection,
			itemView: Panex.Views.DataItem
		});
		this.dataList.show(view);
		console.log("[DataGrid] loadData Completed");
	},

	loadService: function() {
		var serviceCollection = new Panex.Collections.ServiceCollection([{name:'Mohit'}, {name:'Mark'}]);
		var table = new Panex.Views.ServiceTable({
			collection: serviceCollection,
			itemView: Panex.Views.ServiceRow
		});
		this.ui.dataList.reset();
		this.ui.dataList.show(table);
	}
});