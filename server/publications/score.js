Meteor.publishComposite("score", function() {
  return {
    find: function() {
      return Score.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
