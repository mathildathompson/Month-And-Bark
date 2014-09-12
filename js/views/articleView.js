var MonthBark = MonthBark || {};

MonthBark.ArticleView = Backbone.View.extend({
  tagName: 'div',
  className: 'articleView',
  initialize: function () {
    this.template = _.template($('#articleView').html());
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    // var self = this;
    // $.each(this.collection, function(index, article){
    // 	var view = new MonthBark.PicListView({model:product});
    //   //Appending the products into the picView;
    // 	self.$el.append(view.render().el);
    // });
    $('#header').after(this.el);
  }
});