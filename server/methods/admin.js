Meteor.methods({
    'insertApprentice': function(myId,firstName,lastName,email){

        // Create a new apprentice object
        var newApprentice = {
            role: 'apprentice',
            email: email,
            username: email,
            password: '',
            firstName: firstName,
            lastName: lastName,
            adminId: myId, 
        };

        Apprentice.insert( newApprentice, function(error) {
            if (error) {
                console.log(error.message());
            }
        });

        Meteor.users.before.insert(function (userId, doc) {
            doc.createdAt = moment().toDate();
        });
    }
});