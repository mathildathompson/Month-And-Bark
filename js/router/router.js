var MonthBark = MonthBark || {};

MonthBark.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'm&b/fashion': 'index',
    'm&b/writing': 'writing',
    '*anything': 'goHome'
  },

  index: function () {
    this.clearContent();
    var view = new MonthBark.AppView({collection: MonthBark.picksList});
    view.render();
  },

  writing: function(){
    this.clearContent();
    $.each(MonthBark.articlesList, function(index, article){
      var view = new MonthBark.ArticlesView({collection: MonthBark.articlesList})
      view.render();
    })
    
  },

  goHome: function () {
    document.location.hash = '';
  },

  clearContent: function(){
    $('#main').find('#sidebar').remove();
    $('#main').find('#favourites').remove();
  }
});
