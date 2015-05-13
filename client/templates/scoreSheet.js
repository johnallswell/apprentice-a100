Template.scoreSheet.helpers({
	'apprenticeView': function(){
		var apprenticeView = Meteor.users.find({"profile.name":"Apprentice"});
		return apprenticeView;
	}
});

Template.scoreSheet.helpers({
	'oneView': function(){
		var oneView = Meteor.users.find({"profile.name":"Apprentice","profile.firstName": "James"});
		return oneView;
	}
});

Template.scoreSheet.helpers({
	'viewIndividual': function (){
		console.log(Session.get('myId'));
		return Meteor.users.findOne({_id:Session.get('myId')});
	}
});

Template.scoreSheet.helpers({
    selected: function () {
      return Session.equals("myId", this._id) ? "selected" : '';
    }
  });

Template.scoreSheet.events({
  'click .facilitator': function(event, template){
    Session.set('myId', this._id);
    $('.introPanel').hide();
    $('.viewPanel').show();
  }
});

Template.scoreSheet.events({
  "click .submitScore": function (e) {

    // Prevent default button click behavior
    e.preventDefault();

    // Insert the form data into the "Agencies" collection
	var question1=$("[name='question1']").val();
	var question2=$("[name='question2']").val();
	var question3=$("[name='question3']").val();
	var question4=$("[name='question4']").val();
	
	
    $('#addItemModal').modal('hide');
      
      var myProfile  = Meteor.users.find({"profile.name":"Apprentice","profile.firstName": "James"});
      
    Meteor.call('insertScore',myProfile,question1,question2,question3,question4);
  }

});