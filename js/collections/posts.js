var blog = blog || {};

blog.Posts = Backbone.Collection.extend({
  model: blog.Post
});