var MonthBark= MonthBark|| {};

_.templateSettings = {
    interpolate: /\{\{\=(.+?)\}\}/g,
    evaluate: /\{\{(.+?)\}\}/g
};

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

  function initArticles(){
      Tabletop.init({
        key: '1vh_fwS0WnN8dJQLdbmlLzRSiXtRl-QKiIVZjvzpitwU',
        callback: createArticles,
        simpleSheet: true
      })
  }

  function createArticles(data, tabletop){
    //New article collection;
    MonthBark.articlesList = new MonthBark.Articles();
    $.each(data, function(index, article){
      MonthBark.articlesList.push(new MonthBark.Article({title: article.title, content: article.content, image_1: article.image1, image_2: article.image2})) 
    })
    console.log('MonthBark articles', MonthBark.articlesList)
  }

  function sanatizeData(data){
    //Get all of the pick Ids;
    var pickIds = _.map(MonthBark.picksList.models, function(item){
      return item.attributes.id
    });
    //Make sure that the pickId assigned exists;
    return data = _.reject(data, function(product){
       _.contains(pickIds, product.id)
    })
  }

  function showPicInfo(data, tabletop){
    console.log(data);
    MonthBark.picksList = new MonthBark.Picks();
    $.each(data, function(index, pick){
      MonthBark.picksList.push(new MonthBark.Pick({date: pick.date, products: [], name: pick.name, id: pick.rowNumber}))
    })
    initProducts();
  }

  function showProductInfo(data, tabletop) {
    var data = sanatizeData(data);
    //Creating an empty collection to push products into; 
    MonthBark.productsList = new MonthBark.Products();
    //Creating product models and pushing them into pics; 
    $.each(data, function(index, product){
      var new_product = new MonthBark.Product({url: product.url, price: product.price, month: product.month, slug: product.slug, imageurl1: product.imageurl1, pick_id: product.pickid, category: product.category.toLowerCase()});
      //Pushing a new product model into the productsList collection;
      MonthBark.productsList.push(new_product)
      var pickList = MonthBark.picksList.findWhere({id: parseInt(product.pickid)});
      pickList.attributes.products.push(new_product);
    });
    MonthBark.picksListClone = MonthBark.picksList.clone();
    MonthBark.router = new MonthBark.AppRouter();
    Backbone.history.start();
  }
  
  initArticles();
  initPicks();
});



