var MonthBark = MonthBark || {};

MonthBark.ArticleObjectView = Backbone.View.extend({
  tagName: 'li',
  className: 'articleObjectView',
  initialize: function () {
    this.template = _.template($('#articleObjectView').html());
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