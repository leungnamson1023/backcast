var AppView = Backbone.View.extend({

  el: '#app',

  // collection: new Videos(window.exampleVideoData),

  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this.firstVid);
    this.videos.search();
    this.render();
  },

  firstVid: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },


  render: function() {
    this.$el.html(this.template());

    new VideoPlayerView({
      collection: this.videos,
      el: this.$('.player'),
      model: this.videos.at(0)
    }).render();

    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();

    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();
    return this; 
  },

  template: templateURL('src/templates/app.html')

});
  