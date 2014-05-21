var Issy = Issy || {};

Issy.AppView = Backbone.View.extend({
  el: '#main',
  initialize: function () {
    this.template = _.template($('#appView').html());
  },
  render: function () {
    this.$el.html(this.template());

    $.each(Issy.categories, function(index, category){
      var view = new Issy.CategoryView({model: category});
      $('#header').append(view.render().el);
      console.log(category.attributes);
    })

    $.each(this.collection, function(index, pic){
      var view = new Issy.PicListView({model:pic});
      $('#favourites').append(view.render().el);
    });
  }
});


