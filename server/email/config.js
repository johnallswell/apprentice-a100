Meteor.startup(function() {

  Meteor.methods({
    'sendContactEmail': function(name, email) {
      this.unblock();

      Email.send({
        to: email,
        from: "johnsannithomas@gmail.com",
        subject: 'New Contact Form Message',
        text: name
        // html: Handlebars.templates['contactEmail']({siteURL: Meteor.absoluteUrl(), fromName: name, fromEmail: email, message: message})
      });
    }
  });
});
