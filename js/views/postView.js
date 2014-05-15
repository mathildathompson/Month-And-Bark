var blog = blog || {};

blog.PostView = Backbone.View.extend({
  el: '#main',
  initialize: function () {
    this.template = _.template($('#postView').html());
    this.render();
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
