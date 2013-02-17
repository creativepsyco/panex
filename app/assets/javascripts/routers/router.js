Panex.Routers.Router = Backbone.Marionette.AppRouter.extend({
	routes: {
		'dashboard': 'loadDashboard',
		'profile': 'loadProfile',
		'patient/add': 'addPatient',
		'visit/add': 'addVisit'
	},

	initialize: function() {
	},

	loadDashboard: function () {
		// var patientCollection = new Panex.Collections.PatientCollection([{name:'Mohit'}]);
		// var table = new Panex.Views.PatientTable({
		// 	collection: patientCollection,
		// 	itemView: Panex.Views.PatientRow
		// });
		var table = new Panex.Views.Dashboard();
		Panex.mainContent.show(table);
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
	},

	addVisit: function() {
		console.log("[Router] Loading Add Visit Page completed");
		var visit = new Panex.Models.Patient({});
		var addVisitView = new Panex.Views.VisitAdd();
		Panex.mainContent.show(addVisitView);
	}
});