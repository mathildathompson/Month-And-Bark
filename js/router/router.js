var Issy = Issy || {};

Issy.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'showPost',
    '*anything': 'goHome'
  },

  index: function () {
    console.log(Issy.pics);
    var view = new Issy.AppView({collection: Issy.pics});
    view.render();
    console.log('you are at the index page');
  },

  showPost: function (slug) {
    console.log('Show pic')
    var pic = Issy.pics.get(slug);
    var pic = Issy.blogPosts.get(slug);
    new Issy.PicView({model: pic});
  },

  goHome: function () {
    document.location.hash = '';
  }
});
