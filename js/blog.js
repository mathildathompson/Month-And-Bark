var MonthBark= MonthBark|| {};

$(document).ready(function () {
  
  function initProducts() {
    Tabletop.init( { key: '1OgX7endlY9pvLO2tFTJwH-RSA6wMZajbTIusv2Ri9YQ',
                     callback: showProductInfo,
                     simpleSheet: true } )
  }

  function initPicks(){
    Tabletop.init({
      key: '1-TkpRr3d73P2L7yG1B470Tl7DdTMtqmVOi_4DkN0duA',
      callback: showPicInfo,
      simpleSheet: true
    })
  }

  function showPicInfo(data, tabletop){
    var data = data.reverse();
    MonthBark.picks = {};
    $.each(data, function(index, pick){
      console.log(index, pick.rowNumber)
      MonthBark.picks[pick.rowNumber] = (new MonthBark.Pick({date: pick.date, products: [], name: pick.name}))
    })
    console.log(MonthBark.picks);
    initProducts();
  }

  function showProductInfo(data, tabletop) {
    //Creating an empty collection to push products into; 
    MonthBark.productsList = new MonthBark.Products();
    //Creating product models and pushing them into pics; 
    $.each(data, function(index, pic){
      var new_product = new MonthBark.Product({url: pic.url, price: pic.price, month: pic.month, slug: pic.slug, imageurl1: pic.imageurl1, pick_id: pic.pickid, category: pic.category});
      //Pushing a new product model into the productsList collection;
      MonthBark.productsList.push(new_product)
      MonthBark.picks[pic.pickid].attributes.products.push(new_product);
    });
    console.log(MonthBark.picks);
    
    MonthBark.router = new MonthBark.AppRouter();
    Backbone.history.start();
  }
  initPicks();
});



