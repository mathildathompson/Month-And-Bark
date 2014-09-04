var MonthBark = MonthBark || {};

MonthBark.PicListView = Backbone.View.extend({
  tagName: 'div',
  className: 'product-div',
  initialize: function () {
    this.template = _.template($('#productListView').html());
  },
  render: function () {
    this.$el.addClass('pic').html(this.template(this.model.toJSON()));
    return this;
  }
});
