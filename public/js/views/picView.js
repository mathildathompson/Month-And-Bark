var MonthBark = MonthBark || {};

MonthBark.PicView = Backbone.View.extend({
  tagName: 'div',
  className: 'picView',
  initialize: function () {
    this.template = _.template($('#picView').html());
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    var self = this;
    $.each(this.model.attributes.products, function(index, product){
    	var view = new MonthBark.PicListView({model:product});
      //Appending the products into the picView;
    	self.$el.append(view.render().el);
    });
    return this;
  }
});
