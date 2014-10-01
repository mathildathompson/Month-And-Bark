var MonthBark = MonthBark || {};

MonthBark.ArticleObjectView = Backbone.View.extend({
  tagName: 'li',
  className: 'articleObjectView',
  events: {
    'click': 'showArticle'
  },
  initialize: function () {
    this.template = _.template($('#articleObjectView').html());
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    // var self = this;
    // $.each(this.collection, function(index, article){
    // 	var view = new MonthBark.PicListView({model:product});
    //   //Appending the products into the picView;
    // 	self.$el.append(view.render().el);
    // });
    return this;
  },
  showArticle: function(){
    //Hide all of the articles;
    var hiddenArticles = this.$el.closest('.articleView').find('li');
    $.each(hiddenArticles, function(index, article){
      $(article).closest('li').toggleClass('hide')
    })
    this.$el.toggleClass('articleObjectViewShow');
    this.$el.find('section').toggleClass('article-content',600);

    //Toggle article content class from the article that was clicked on
    // this.$el.find('p').toggleClass('article-content',600).promise().done(function(){
      //Get all of the other articles and add toggle a class of hidden
      // debugger;
      // var hiddenArticles = self.$el.closest('.articleView').find('.article-content');
      // $.each(hiddenArticles, function(index, article){
      //   $(article).closest('li').toggleClass('hidden')
      // })
    // });
    //when this is done need to find all elements with class of article-content and hide them;
  }
});