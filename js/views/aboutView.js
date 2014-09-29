var MonthBark = MonthBark || {};

MonthBark.AboutView = Backbone.View.extend({
  tagName: 'div',
  className: 'aboutView',
  initialize: function(){
    this.template = _.template($('#aboutView').html());
  },
  render: function () {
    this.$el.append(this.template);
    return this;
  }
});