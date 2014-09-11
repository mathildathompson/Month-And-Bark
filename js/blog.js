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
    MonthBark.picksList = new MonthBark.Picks();
    $.each(data, function(index, pick){
      MonthBark.picksList.push(new MonthBark.Pick({date: pick.date, products: [], name: pick.name, id: pick.rowNumber}))
    })
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
      //Look up the pick in the pickList array, add error checking to check the pickid has been defined;
      if(pic.pickid !== ""){
        var pickList = MonthBark.picksList.findWhere({id: parseInt(pic.pickid)})
        pickList.attributes.products.push(new_product)
      }
    });
    MonthBark.picksListClone = MonthBark.picksList.clone();
    //New article collection;
    MonthBark.articlesList = new MonthBark.Articles();
    MonthBark.articlesList.push(new MonthBark.Article({name: 'Article 1', content: 'There was a young girl called Alice'}))
    MonthBark.router = new MonthBark.AppRouter();
    Backbone.history.start();
  }
  initPicks();
});



