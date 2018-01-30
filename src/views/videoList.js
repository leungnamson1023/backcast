var VideoListView = Backbone.View.extend({

  // el: '.list'
  
  initialize: function() {
    // this.render();
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template()); 



    this.$el.children().empty();

    this.$el.children().append(this.collection.map(function(value) {
      return new VideoListEntryView({model: value}).render().el;
    }));

    // this needs to render with its partner component VideoListEntryView...
    // have to append

    // need to append to the DOM
    
    // need to pass in exampleVideoData
      

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
