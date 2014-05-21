var Issy = Issy || {};

Issy.CategoryView = Backbone.View.extend({
  tagName: 'li',
   events: {
    'click': 'viewCategory'
  },
  initialize: function () {
    this.template = _.template($('#categoryView').html());
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  viewCategory: function(){
    Issy.router.navigate('/m&b/' + this.model.get('slug'), true);
  }
});
