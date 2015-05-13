Meteor.startup(function(){
	if(Meteor.users.find().fetch().length === 0){
		var users = [
		{name: 'A100 Staff', email: 'julio@indie-soft.com', roles: ['admin']}
		]
		_.each(users,function(userData){
		var userid = Accounts.createUser({
		email:userData.email,
		password:'test1',
		username:userData.email,
		profile:{name:userData.name}
		})
		Meteor.users.update({_id:userid},{$set:{'emails.0.verified':true}});
		Roles.addUsersToRoles(userid,userData.roles);
		})
	}
	
});
