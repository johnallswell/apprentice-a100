Meteor.methods({

    'updateMyApprentice': function(ApprenticeId, firstName, lastName){
    
        
        if(firstName!=""){Apprentice.update({_id:ApprenticeId._id},{$set:{ "firstName":firstName}});}
        if(lastName!=""){Apprentice.update({_id:ApprenticeId._id},{$set:{ "lastName":lastName}});}
    
    
    } 
});