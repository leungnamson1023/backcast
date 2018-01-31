var SearchView = Backbone.View.extend({


  events: {
    'click .btn' : 'doSearch',
    'keyup input' : 'keyHit'
    //keyboard enter 
  },

  keyHit: function(e) {
    if (e.keyCode === 13) {
      this.doSearch();
    }
  },

  doSearch: function() {
    var searched = $('input').val();
    if (searched) {
      this.collection.search(searched);
    } else {
      $('input').val();  
    }

  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
