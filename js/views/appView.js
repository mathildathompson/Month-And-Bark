var MonthBark = MonthBark || {};

MonthBark.AppView = Backbone.View.extend({
  el: '#main',
  events: {
    'click .sidebar-link': 'render',
    'click .brands': 'brands'
  },
  initialize: function () {
    this.template = _.template($('#appView').html());
  },
  render: function (event) {
    //Rendering the template;
    this.$el.html(this.template());
    if(event){
      var category = event.currentTarget.attributes.id.value
      if(category !== 'feed'){
        var products = {};
        products['1'] = new MonthBark.Pick({products: MonthBark.productsList.where({category: category}), date:''})
        this.collection = products;
      }else{
        this.collection = MonthBark.picks
      }
    }
    console.log('The collection is', this.collection);
    $.each(this.collection, function(index, pick){
      //Loop through the array of products;
      // $.each(pic.attributes.products, function(index, product){
        var view = new MonthBark.PicView({model:pick});
      // })
      $('#favourites').append(view.render().el);
    });
  },
  favourites: function(event){
    console.log('SideBar link clicked');
    // debugger;
    MonthBark.router.navigate('/m&b/favourites', true);
  },
  brands: function(){
    MonthBark.router.navigate('/m&b/brands', true);
  }
});


