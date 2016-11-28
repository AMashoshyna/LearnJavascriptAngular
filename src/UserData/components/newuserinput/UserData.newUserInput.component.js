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

	function newUserInputController() {
		var ctrl = this;
		ctrl.addUserWrapper = addUserWrapper;
		ctrl.newUser = {
			email:'john@mail.com',
			fullName: 'John Doe',
			birthdate: new Date('2000', '01', '01'),
			address: '3 Center St.Auburn, NY 13021'
		};

		function addUserWrapper() {
			ctrl.addUser({newUser: ctrl.newUser});
			ctrl.newUser = {
				email:'',
				fullName: '',
				birthdate: '',
				address: ''
			};
		}
	}
})();