var MonthBark = MonthBark || {};

MonthBark.ArticleNavView = Backbone.View.extend({
  tagName: 'ul',
  className: 'articleNavSidebarView',
  render: function () {
    var thisView = this;
    $.each(this.collection, function(index, article){
      var view = new MonthBark.ArticleNavObjectView({model: article});
      thisView.$el.append(view.render().el);
    });
    // var self = this;
    // $.each(this.collection, function(index, article){
    // 	var view = new MonthBark.PicListView({model:product});
    //   //Appending the products into the picView;
    // 	self.$el.append(view.render().el);
    // });
    return this;
  }
});