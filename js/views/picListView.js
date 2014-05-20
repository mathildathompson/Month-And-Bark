var Issy = Issy || {};

Issy.PicListView = Backbone.View.extend({
  tagName: 'li',
  initialize: function () {
    this.template = _.template($('#postListView').html());
    // this.template_two = _.template($('#picView').html());
  },
  render: function () {
    this.$el.addClass('pic').html(this.template(this.model.toJSON()));
    return this;
  }
});
