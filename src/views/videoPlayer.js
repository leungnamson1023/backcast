var VideoPlayerView = Backbone.View.extend({


  intialize: function() {
    this.on('change', this.render(), this);
  },


  selectVideo: function(selected) {
    this.model = selected;
    this.render();
  },

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
