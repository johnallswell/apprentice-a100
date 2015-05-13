Template.viewIndividual.helpers({
	'viewIndividual': function (){
		return Apprentice.findOne({_id:Session.get('myId')});
	}
});


Template.viewIndividual.events({
  "click [data-action='editProfile']": function (e) {

    // Prevent default button click behavior
    e.preventDefault();

    // Update and Insert the form data into the "Current Users Profile document

    var firstName = $("[name='firstName']").val();
    var lastName = $("[name='lastName']").val();

    var ApprenticeId  = Apprentice.findOne({_id:Session.get('myId')});
    Meteor.call('updateMyApprentice', ApprenticeId, firstName, lastName);
    // Hide the bootstrap modal once we submit the form
    $('#editItemModal').modal('hide');
  },
  'click .deleteDoc': function(){
  	var ApprenticeId  = Apprentice.findOne({_id:Session.get('myId')});
    Meteor.call('deleteApprentice', ApprenticeId);
  	$('#deletePrompt').modal('hide');
  	$('.viewPanel').hide();
  }

});