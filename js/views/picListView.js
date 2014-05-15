var Issy = Issy || {};

Issy.PicListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'viewPost'
  },
  initialize: function () {
    this.template = _.template($('#postListView').html());
    this.template_two = _.template($('#picView').html());
  },
  render: function () {
    this.$el.addClass('pic').html(this.template(this.model.toJSON()));
    return this;
  },
  viewPost: function (event) {
    event.preventDefault();
    // debugger;
    var picView = $('.picView');
    if(picView.length > 0){
      picView.remove();
    } else {
      this.$el.prepend(this.template_two(this.model.toJSON()));
    }
    return this;
    //When I click I want a pop up to display the item with all the pictures
  }
});
