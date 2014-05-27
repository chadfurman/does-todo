Template.login.events({
	'click .facebook-login': function(event) {
		event.preventDefault();
		Meteor.loginWithFacebook();
	},
	'click .github-login': function(event) {
		event.preventDefault();
		Meteor.loginWithGithub();
	},
	'click .google-login': function(event) {
		event.preventDefault();
		Meteor.loginWithGoogle();
	}
});
