(function() {
	'use strict';

	angular.module('UserData')

	.component('newUserInput', {
	templateUrl: 'src/templates/newUserInput.html',
	bindings: {
		addUser: '&'
	},
	controller: newUserInputController
});

	function newUserInputController(UserCardService) {
	var ctrl = this;
	ctrl.newUser = {
		email:'john@mail.com',
		fullName: 'John Doe',
	};

	ctrl.addUserWrapper = function() {
      ctrl.addUser({newUser: ctrl.newUser});
  	ctrl.newUser = {
		email:'',
		fullName: '',
	};    


	}

};
})();