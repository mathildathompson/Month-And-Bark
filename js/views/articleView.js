var MonthBark = MonthBark || {};

MonthBark.ArticleView = Backbone.View.extend({
  tagName: 'div',
  className: 'articleView',
  render: function () {
    var self = this;
    $.each(this.collection, function(index, article){
    	var view = new MonthBark.ArticleObjectView({model: article});
      //Appending the products into the picView;
    	self.$el.append(view.render().el);
    });
    return this;
  }
});