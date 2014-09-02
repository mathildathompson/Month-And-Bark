var MonthBark= MonthBark|| {};

// blog.blogPosts = new blog.Posts([
//   new blog.Post({id: 1, title: 'Web Development', slug: 'web-dev', content: 'Lorem ipsum'}),
//   new blog.Post({id: 2, title: 'Web Design', slug: 'web-design', content: 'Lorem ipsum ipsum'}),
//   new blog.Post({id: 3, title: 'Photography', slug: 'photos', content: 'Lorem IPSUM ipsum ipsum'}),
//   new blog.Post({id: 4, title: 'Coffee', slug: 'coffee', content: 'Lorem coffee ipsum'})
// ]);

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
    MonthBark.picks = {};
    $.each(data, function(index, pick){
      MonthBark.picks[pick.rowNumber] = (new MonthBark.Pick({date: pick.date, products: [], name: pick.name}))
    })
    initProducts();
  }

  function showProductInfo(data, tabletop) {
    //Creating an empty collection to push products into; 
    MonthBark.productsList = new MonthBark.Products();
    //Creating product models and pushing them into pics; 
    $.each(data, function(index, pic){
      var product = new MonthBark.Product({type: pic.type, url: pic.url, price: pic.price, month: pic.month, slug: pic.slug, imageurl1: pic.imageurl1, pick_id: pic.pickid});
      MonthBark.productsList.push(product)
      MonthBark.picks[pic.pickid].attributes.products.push(product);
    });
    MonthBark.router = new MonthBark.AppRouter();
    Backbone.history.start();
  }
  initPicks();
});



