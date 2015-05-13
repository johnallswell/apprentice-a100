Meteor.methods({

    'deleteApprentice': function(ApprenticeId){
        Apprentice.remove({_id:ApprenticeId._id});
    }
    
});