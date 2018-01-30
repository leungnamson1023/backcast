var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    console.log('please');
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    console.log('---------------------------', SearchView);
    new SearchView().render();
    new VideoListView().render();
    new VideoListEntryView().render();
    new VideoPlayerView().render();
    this.$el.html(this.template());
    return this; 
  },

  template: templateURL('src/templates/app.html')

});
  