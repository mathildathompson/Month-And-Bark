var MonthBark = MonthBark || {};

MonthBark.PicListView = Backbone.View.extend({
  tagName: 'div',
  className: 'product-div',
  events: {
    'mouseenter': 'toggleMouseover',
    'mouseleave': 'toggleMouseout'
  },
  initialize: function () {
    this.template = _.template($('#productListView').html());
  },
  render: function () {
    this.$el.addClass('pic').html(this.template(this.model.toJSON()));
    this.$el.on('mouseover', '.product-div', function(){
    	console.log('mouseover');
    })
    return this;
  },
  toggleMouseover: function(event){
    console.log('toggleMouseOver');
    var $currentTarget = $(event.currentTarget).find('img');
    var $productView = $currentTarget.closest('.product-div');
    var $hoverDiv = $currentTarget.next();
    var $height = $productView.height();
    var $width = $productView.width();
    var $hoverDiv = $currentTarget.next();
    $hoverDiv.toggleClass('hidden showProductInfoDiv').css({'height': $height, 'width': $width, 'top': '0', 'background-color': 'lightgrey', 'opacity': '0.8'});
  },
  toggleMouseout: function(event){
    console.log('toggleMouseoOut');
    var $currentTarget = $(event.currentTarget);
    var $hoverDiv = $currentTarget.find('div')
    $hoverDiv.toggleClass('hidden showProductInfoDiv')
  },
});
