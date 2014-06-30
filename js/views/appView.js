var MonthBark = MonthBark || {};

MonthBark.AppView = Backbone.View.extend({
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
      var view = new MonthBark.PicListView({model:pic});
      $('#favourites').append(view.render().el);
    });
  },
  favourites: function(){
    MonthBark.router.navigate('/m&b/favourites', true);
  },
  brands: function(){
    MonthBark.router.navigate('/m&b/brands', true);
  }
});


