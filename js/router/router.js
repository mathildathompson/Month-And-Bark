var MonthBark = MonthBark || {};

MonthBark.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'm&b/favourites': 'index',
    'm&b/fashion': 'fashion',
    '*anything': 'goHome'
  },

  index: function () {
    this.clearContent();
    var view = new MonthBark.AppView({collection: MonthBark.picksList});
    view.render();
  },

  fashion: function(){
    this.clearContent();
    var view = new MonthBark.ArticleView({collection: MonthBark.articles})
  },

  goHome: function () {
    document.location.hash = '';
  },

  clearContent: function(){
    $('#header').next().remove();
  }
});
