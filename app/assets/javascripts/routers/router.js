Panex.Routers.Router = Backbone.Marionette.AppRouter.extend({
	routes: {
		'dashboard': 'loadDashboard',
		'profile': 'loadProfile',
		'patient/add': 'addPatient',
		'visit/add': 'addVisit',
		// Services
		'service/add': 'addService',
		'service/view': 'viewService',
		// Apps
		'app/add': 'addApp',
		'app/view': 'viewApp'
	},

	initialize: function() {},

	loadDashboard: function() {
		// var patientCollection = new Panex.Collections.PatientCollection([{name:'Mohit'}]);
		// var table = new Panex.Views.PatientTable({
		// 	collection: patientCollection,
		// 	itemView: Panex.Views.PatientRow
		// });
		var table = new Panex.Views.Dashboard();
		Panex.mainContent.show(table);
	},

	loadProfile: function() {
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
	},

	// Services
	addService: function() {
		var serviceModel = new Panex.Models.Service({});
		var addServiceNew = new Panex.Views.ServiceAdd();
		Panex.mainContent.show(addServiceNew);
		console.log("[Router] Loading Add Service Page completed");
	},

	viewService: function() {
		var serviceView = new Panex.Views.ServiceView();
		Panex.mainContent.show(serviceView);
		console.log("[Router] Loading View Service Page completed");
	},

	addApp: function() {
		var appModel = new Panex.Models.App({});
		var addAppView = new Panex.Views.AppAdd();
		Panex.mainContent.show(addAppView);
		console.log("[Router] Add App View Loaded");
	},

	viewApp: function() {
		var appView = new Panex.Views.AppView();
		Panex.mainContent.show(appView);
		console.log("[Router] View App View load completed");
	}
});