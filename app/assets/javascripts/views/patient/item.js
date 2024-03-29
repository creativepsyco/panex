Panex.Views.PatientRow = Backbone.Marionette.ItemView.extend({
	template: JST['patient/row'],
	tagName: 'tr',
	
	isSelected: false,

	events: {
		'click' : 'onClick',
		'focus' : 'onHover'
	},
	ui: {
		tr: 'tr'
	},
	initialize: function() {
		
	},
	
	onRender: function() {

	},

	onClick: function() {
		console.log("[PatientRow] Item Clicked");
		// mark self as selected
		if(!this.isSelected) {
			this.isSelected = true;
			this.$el.addClass('highlight');
		} else {
			this.isSelected = false;
			this.$el.removeClass('highlight');
		}
	},

	onHover: function() {
		console.log("[PatientRow] Hover Event");
	}
});