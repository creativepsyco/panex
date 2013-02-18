Panex.Views.DataList = Backbone.Marionette.CompositeView.extend({

	template: JST['data/list'],
	tagName: 'div',
	className: '',

	appendHtml: function(collectionView, itemView, index) {
		collectionView.$("#data-list").append(itemView.el);
	}
});