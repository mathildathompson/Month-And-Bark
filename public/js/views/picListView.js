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
    
    return this;
  },
  toggleMouseover: function(event){
    console.log('toggleMouseOver');
    var $productView = $(event.currentTarget);
    var $hoverDiv = $productView.find('a');
    var $height = $productView.height();
    var $width = $productView.width();
    $hoverDiv.toggleClass('hide showProductInfoDiv').css({'height': $height, 'width': $width, 'top': '0', 'background-color': 'lightgrey', 'opacity': '0.8', 'padding-top': ($height / 2.2)});
  },
  toggleMouseout: function(event){
    console.log('toggleMouseoOut');
    var $currentTarget = $(event.currentTarget);
    var $hoverDiv = $currentTarget.find('a')
    $hoverDiv.toggleClass('hide showProductInfoDiv')
  },
});
