Panex.Routers.Router = Backbone.Marionette.AppRouter.extend({
	routes: {
		'dashboard': 'loadDashboard',
		'profile': 'loadProfile'
	},

	initialize: function() {
	},

	loadDashboard: function () {
		var patientCollection = new Panex.Collections.PatientCollection([{name:'Mohit'}]);
		var table = new Panex.Views.PatientTable({
			collection: patientCollection,
			itemView: Panex.Views.PatientRow
		});
		Panex.table.show(table);
	},

	loadProfile: function () {
		alert("Hi Profile");
	}
});