HomeController = AppController.extend({
  waitOn: function() {
    return this.subscribe('score');
  },
  data: {
    score: Score.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('A100');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
