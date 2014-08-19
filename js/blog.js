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
    MonthBark.picks = [];
    $.each(data, function(index, pick){
      MonthBark.picks.push(new MonthBark.Pick({date: pick.date, id: pick.rowNumber}))
    })
    console.log(MonthBark.picks);
  }

  function showProductInfo(data, tabletop) {
    console.log("Successfully processed!")
    //Creating picture models and pushing them into the 
    MonthBark.products = [];
    $.each(data, function(index, pic){
      MonthBark.products.push(new MonthBark.Product({url: pic.url, price: pic.price, month: pic.month, slug: pic.slug, imageurl1: pic.imageurl1, pick_id: pic.pickid}))
    });
    MonthBark.router = new MonthBark.AppRouter();
    Backbone.history.start();
  }
  initProducts();
  initPicks();
});



