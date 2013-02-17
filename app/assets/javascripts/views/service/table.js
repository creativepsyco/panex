Panex.Views.ServiceTable = Backbone.Marionette.CompositeView.extend({

	template: JST['service/table'],
	tagName: 'table',
	className: 'table table-first-column-check table-hover',

	appendHtml: function(collectionView, itemView, index) {
		collectionView.$("tbody").append(itemView.el);
	}
});