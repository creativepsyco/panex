Panex.Views.Dashboard = Backbone.Marionette.ItemView.extend({
	template: JST['dashboard/dashboard'],
	events: {
		'click #searchButton' : 'onSearch'
	},
	ui: {
		
	},
	initialize: function() {
		
	},
	
	onRender: function() {

	},

	onSearch: function() {
		// Show the Patient Results in the table
		console.log("[Search] Invoked");
		var patientCollection = new Panex.Collections.PatientCollection([{name:'Mohit'}, {name:'Mark'}]);
		var table = new Panex.Views.PatientTable({
			collection: patientCollection,
			itemView: Panex.Views.PatientRow
		});
		Panex.table.show(table);
	}
});