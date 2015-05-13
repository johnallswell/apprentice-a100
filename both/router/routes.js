Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});

Router.route('/apprenticeView', {//referenced through {{pathFor}} calls in client/templates/_shared/header.html
  name: 'apprenticeView'
});

Router.route('/scoreSheet', {
  name: 'scoreSheet'
});

Router.configure({
 	waitOn: function() {
 		return [
 			Meteor.subscribe("users")
 		];
 	}
 });

Router.configure({
 	waitOn: function() {
 		return [
 			Meteor.subscribe("score"),
 			Meteor.subscribe("apprentice")
 		];
 	}
 });
