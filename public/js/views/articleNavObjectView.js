var MonthBark = MonthBark || {};

MonthBark.ArticleNavObjectView = Backbone.View.extend({
  tagName: 'li',
  className: 'articleNavObjectView',
  initialize: function () {
    this.template = _.template($('#articleNavObjectView').html());
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    // var self = this;
    // $.each(this.collection, function(index, article){
    // 	var view = new MonthBark.PicListView({model:product});
    //   //Appending the products into the picView;
    // 	self.$el.append(view.render().el);
    // });
    return this;
  }
});