var MonthBark = MonthBark || {};

MonthBark.PicView = Backbone.View.extend({
  tagName: 'li',
  initialize: function () {
    this.template = _.template($('#picView').html());
  },
  render: function () {
    this.$el.addClass('.picView').html(this.template(this.model.toJSON()));
    return this;
  }
});
