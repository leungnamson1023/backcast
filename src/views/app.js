var AppView = Backbone.View.extend({

  el: '#app',

  collection: new Videos(window.exampleVideoData),

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    new VideoPlayerView({
      collection: this.collection,
      el: this.$('.player'),
      model: this.collection.models[0]
    }).render();

    new VideoListView({
      collection: this.collection,
      model: this.videos,
      el: this.$('.list')
    }).render();

    new SearchView({
      collection: this.collection,
      el: this.$('.search')
    }).render();

    

    return this; 
  },

  template: templateURL('src/templates/app.html')

});
  