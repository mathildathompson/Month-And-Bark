var MonthBark = MonthBark || {};

MonthBark.ArticlesView = Backbone.View.extend({
  tagName: 'div',
  className: 'articlesView',
  initialize: function () {
    this.template = _.template($('#articlesView').html());
  },
  render: function () {
    this.$el.html(this.template());
    // var self = this;
    debugger;
    $.each(this.collection, function(index, article){
    // 	var view = new MonthBark.PicListView({model:product});
    //   //Appending the products into the picView;
    // 	self.$el.append(view.render().el);
    });
    $('#header').append(this.el);
  }
});