Meteor.publishComposite("apprentice", function() {
  return {
    find: function() {
      return Apprentice.find({});
    }
    
  }
});
