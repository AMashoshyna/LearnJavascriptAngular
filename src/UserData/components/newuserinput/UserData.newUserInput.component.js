(function() {
	'use strict';

	angular.module('UserData')

	.component('newUserInput', {
	templateUrl: 'src/UserData/newuserinput/newUserInput.html',
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
		birthdate: new Date('2000', '01', '01'),
		address: '3 Center St.Auburn, NY 13021'

	};

	ctrl.addUserWrapper = function() {
      ctrl.addUser({newUser: ctrl.newUser});
  	ctrl.newUser = {
		email:'',
		fullName: '',
		birthdate: '',
		address: ''
	};    


	}

};
})();