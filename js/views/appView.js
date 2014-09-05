var MonthBark = MonthBark || {};

MonthBark.AppView = Backbone.View.extend({
  el: '#main',
  events: { //Need to set the events on the root $el;
    'click .sidebar-link': 'render',
    'click .brands': 'brands',
    'mouseenter .product-div img': 'toggleMouseover',
    'mouseleave .product-div': 'toggleMouseout'
  },
  initialize: function () {
    this.template = _.template($('#appView').html());
  },
  render: function (event) {
    this.$el.html(this.template());
    if(event){
      //Clear the current models in the collection;
      this.collection.models = [];
      var category = event.currentTarget.id
      if(category !== 'feed'){
        var products = MonthBark.productsList.where({category: category})
        var pick = new MonthBark.Pick({products: products, date:''}) 
        this.collection.models.push(pick);
      }else{
        this.collection = MonthBark.picksListClone.clone();
      }
    }
    //Reversing the direction of the picks;
    var picks = this.collection.models.reverse();
    $.each(picks, function(index, pick){
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
  },
  toggleMouseover: function(event){
    var $currentTarget = $(event.currentTarget);
    var $productView = $currentTarget.closest('.product-div');
    var $hoverDiv = $currentTarget.next();
    var $height = $productView.height();
    var $width = $productView.width();
    var $hoverDiv = $currentTarget.next();
    $hoverDiv.toggleClass('hidden showProductInfoDiv').css({'height': $height, 'width': $width, 'top': '0', 'background-color': 'lightgrey', 'opacity': '0.8'});
  },
  toggleMouseout: function(event){
    console.log('mouseOutEvent', event, Math.random())
    var $currentTarget = $(event.currentTarget);
    var $hoverDiv = $currentTarget.find('div')
    $hoverDiv.toggleClass('hidden showProductInfoDiv')
  }
});




