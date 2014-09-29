var MonthBark = MonthBark || {};

MonthBark.ContactView = Backbone.View.extend({
  tagName: 'div',
  className: 'contactView',
  initialize: function(){
    this.template = _.template($('#contactView').html());
  },
  render: function () {
    this.$el.append(this.template);
    return this;
    // this.$el.append(this.template);
    // return this;
  }
});