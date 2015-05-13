Template.apprenticeView.rendered = function (){
  $('.viewPanel').hide();
    $('.introPanel').show();
}

Template.apprenticeView.helpers({
	'apprenticeView': function(){
		var apprenticeView = Apprentice.find({});
		return apprenticeView;
	}
});

Template.apprenticeView.helpers({
    selected: function () {
      return Session.equals("myId", this._id) ? "selected" : '';
    }
  });

Template.apprenticeView.events({
  'click .facilitator': function(event, template){
    Session.set('myId', this._id);
    $('.introPanel').hide();
    $('.viewPanel').show();
  }
});