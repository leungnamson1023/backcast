var VideoListView = Backbone.View.extend({

  // el: '.list'
  
  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template()); 


    // this needs to render with its partner component VideoListEntryView...
    
    // have to append

    // this.$el.children().append('template');
  

    // this.collection.forEach(function(value) {
    //   //console.log(value);
    //   // $thumbnails = $('<img>' + value.snippets.thumbnails.default.url + '</img>');
    //   new VideoListEntryView({model: value}).render();
    // });

    
    // $thumbnails.appendTo(this.$el.children());
    //   // loops through the collection of example data and 
 
  


    // need to append to the DOM
    
    // need to pass in exampleVideoData
    
      

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
