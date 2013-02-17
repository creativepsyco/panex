Panex.Views.DataItem = Backbone.Marionette.ItemView.extend({
	template: JST['data/item'],
	className: 'span2 data-item',
	
	isSelected: false,

	events: {
		'click' : 'onClick',
		'focus' : 'onHover'
	},
	ui: {

	},
	initialize: function() {
		
	},
	
	onRender: function() {

	},

	onClick: function() {
		console.log("[DataItem] Item Clicked");
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
		console.log("[DataItem] Hover Event");
	}
});