Meteor.methods({
    'insertScore': function(myProfile,question1,question2,question3,question4){
        
        
            Score.insert({
            	apprenticeId:myProfile._id,
                Question1:question1,
                Question2:question2,
                Question3:question3,
                Question4:question4
    });
}});