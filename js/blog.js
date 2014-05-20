var Issy= Issy|| {};

// blog.blogPosts = new blog.Posts([
//   new blog.Post({id: 1, title: 'Web Development', slug: 'web-dev', content: 'Lorem ipsum'}),
//   new blog.Post({id: 2, title: 'Web Design', slug: 'web-design', content: 'Lorem ipsum ipsum'}),
//   new blog.Post({id: 3, title: 'Photography', slug: 'photos', content: 'Lorem IPSUM ipsum ipsum'}),
//   new blog.Post({id: 4, title: 'Coffee', slug: 'coffee', content: 'Lorem coffee ipsum'})
// ]);

$(document).ready(function () {
  
  //Gets Issys pics from the spreadsheet when application loads; 
  var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=1OgX7endlY9pvLO2tFTJwH-RSA6wMZajbTIusv2Ri9YQ/pubhtml&output=html';

  function init() {
    Tabletop.init( { key: '1OgX7endlY9pvLO2tFTJwH-RSA6wMZajbTIusv2Ri9YQ',
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    console.log("Successfully processed!")
    //Creating picture models and pushing them into the 
    Issy.pics = [];
    $.each(data, function(index, pic){
      Issy.pics.push(new Issy.Pic({name: pic.name, url: pic.url, price: pic.price, month: pic.month, slug: pic.slug, imageurl1: pic.imageurl1, imageurl2: pic.imageurl2, imageurl3: pic.imageurl3, imageurl4: pic.imageurl4}))
    })
    //Pushing issy categories into an array;
    Issy.categories = [];
    Issy.categories.push(new Issy.Category({slug:'m&b_favourites'}))
    Issy.categories.push(new Issy.Category({slug:'m&b_vintage'}))
    Issy.categories.push(new Issy.Category({slug:'m&b_music'}))
    Issy.router = new Issy.AppRouter();
    Backbone.history.start();
  }

  init();

});

