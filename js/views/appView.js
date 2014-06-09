var Issy = Issy || {};

Issy.AppView = Backbone.View.extend({
  el: '#main',
  events: {
    'click .favourites': 'favourites',
    'click .brands': 'brands'
  },
  initialize: function () {
    this.template = _.template($('#appView').html());
  },
  render: function () {
    this.$el.html(this.template());

    $.each(this.collection, function(index, pic){
      var view = new Issy.PicListView({model:pic});
      $('#favourites').append(view.render().el);
    });
  },
  favourites: function(){
    Issy.router.navigate('/m&b/favourites', true);
  },
  brands: function(){
    Issy.router.navigate('/m&b/brands', true);
  }
});


