Panex.Routers.Router = Backbone.Marionette.AppRouter.extend({
	routes: {
		'dashboard': 'loadDashboard',
		'profile': 'loadProfile',
		'patient/add': 'addPatient'
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
		console.log("Within LoadProfile");
	},

	addPatient: function() {
		console.log("[Adding Patient View] Loaded");
		var patient = new Panex.Models.Patient({});
		var addPatientView = new Panex.Views.PatientAdd({
			model: patient
		});
		Panex.mainContent.show(addPatientView);
	}
});