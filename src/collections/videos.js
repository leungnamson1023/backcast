var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',


  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      },
      success: function (data) {
        console.log(data);
      },
      error: function(data) {
        console.log('data');
      }
    });
  },
  
  parse: function(response) {
    return response.items;
  }


});
