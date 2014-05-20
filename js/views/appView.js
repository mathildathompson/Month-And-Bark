var Issy = Issy || {};

Issy.AppView = Backbone.View.extend({
  el: '#main',
   events: {
    'click': 'viewPost'
  },
  initialize: function () {
    this.template = _.template($('#appView').html());
  },
  render: function () {
    this.$el.html(this.template());
    $.each(this.collection, function(index, pic){
      var view = new Issy.PicListView({model:pic});
      $('#posts').append(view.render().el);
    });
  },
  viewPost: function(){
    console.log('viewPost', this);
  }
});


