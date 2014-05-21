var Issy = Issy || {};

Issy.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'm&b/favourites': 'index',
    'm&b/music': 'music',
    'm&b/vintage': 'vintage',
    '*anything': 'goHome'
  },

  index: function () {
    this.clearContent();
    var view = new Issy.AppView({collection: Issy.pics});
    view.render();
  },

  music: function(){
    this.clearContent();
    console.log('music');

  },

  vintage: function(){
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
