var Issy = Issy || {};

Issy.Pic = Backbone.Model.extend({
  idAttribute: 'slug',
  defaults: {
    title: 'New Post Title',
    slug: 'new-post',
    content: 'New post content'
  }
});
