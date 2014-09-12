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
    debugger;
    var view = new MonthBark.AppView({collection: MonthBark.picksList});
    $('#header').after(view.render().el);
  },

  writing: function(){
    this.clearContent();
    $.each(MonthBark.articlesList.models, function(index, article){
      var view = new MonthBark.ArticleView({model: article});
      view.render();
    })
    
  },

  goHome: function () {
    document.location.hash = '';
  },

  clearContent: function(){
    $('#main').find('#sidebar').remove();
    $('#main').find('#favourites').remove();
    $('#main').find('.articleView').remove();
  }
});
