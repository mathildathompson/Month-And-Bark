var Issy = Issy || {};

Issy.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'm&b/favourites': 'index',
    'm&b/brands': 'brands',
    '*anything': 'goHome'
  },

  index: function () {
    this.clearContent();
    var view = new Issy.AppView({collection: Issy.pics});
    view.render();
  },

  brands: function(){
    this.clearContent();
    console.log('vintage');
  },

  goHome: function () {
    document.location.hash = '';
  },

  clearContent: function(){
    $('#header').next().remove();
  }
});
