Panex.Views.Dashboard = Backbone.Marionette.Layout.extend({
	template: JST['dashboard/dashboard'],
	events: {
		'click #searchButton' : 'onSearch'
	},
	ui: {
		dataPanel : "#bottom-panel"
	},
	initialize: function() {
		
	},
	
	onRender: function() {
		var dataLayout = new Panex.Views.DataGrid();
		this.ui.dataPanel.show(dataLayout);
		console.log("[Dashboard] Data Panel Loaded");
	},

	onSearch: function() {
		// Show the Patient Results in the table
		console.log("[Search] Invoked");
		var patientCollection = new Panex.Collections.PatientCollection([{name:'Mohit'}, {name:'Mark'}]);
		var table = new Panex.Views.PatientTable({
			collection: patientCollection,
			itemView: Panex.Views.PatientRow
		});
		Panex.table.reset();
		Panex.table.show(table);
	}
});