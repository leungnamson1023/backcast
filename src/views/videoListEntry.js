var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    // this.render();
  },


  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    // console.log(this);
    this.model.select();
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    // this.$('.video-list-entry-title').html(this.model.attributes.snippet.title);
    // this.$('.video-list-entry-detail').html(this.model.attributes.snippet.description);
    // this.$('.media-object').attr('src', this.model.attributes.snippet.thumbnails.default.url);
    return this;

  },

  template: templateURL('src/templates/videoListEntry.html')
  
});
