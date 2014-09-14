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
    $('#header').after(view.render().el);
  },

  writing: function(){
    this.clearContent();

    var mainView = new MonthBark.ArticleView({collection: MonthBark.articlesList.models});
    $('#header').after(mainView.render().el);

    //Create a new articleNavView within this I am going to have to loop through each of the articles; 
    var sideBarView = new MonthBark.ArticleNavView({collection: MonthBark.articlesList.models});
    $('#header').after(sideBarView.render().el);
   
    // $.each(MonthBark.articlesList.models, function(index, article){
    //   var view = new MonthBark.ArticleNavView({collection: MonthBark.articlesList.models});
    //   $('#header').after(view.render().el);
    // });
    
  },

  goHome: function () {
    document.location.hash = '';
  },

  clearContent: function(){
    $('#main').find('#sidebar').remove();
    $('#main').find('#favourites').remove();
    $('#main').find('.articleView').remove();
    $('#main').find('.articleNavSidebarView').remove();
  }
});
