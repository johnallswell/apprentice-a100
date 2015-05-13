Template.addApprentice.events({
  "click .add-apprentice": function (e, template) {

    // Prevent default button click behavior
    e.preventDefault();

    var firstName=$("[name='firstName']").val();
    var lastName=$("[name='lastName']").val();
    var email=$("[name='email']").val();

    var email = template.find("#email").value;

    var name = firstName+' '+lastName;
    template.find("#firstName").value="";
    template.find("#lastName").value="";
    template.find("#email").value="";
    console.log(email);
    //$('.addForm').hide();

    var myId  = Meteor.userId();

    Meteor.call('insertApprentice',myId,firstName,lastName,email);
    Meteor.call('sendContactEmail', name, email);
}

});