
(function() {
		angular.module('myApp')
	.component('login', {
		templateUrl: 'src/App/login/loginComponent.html',
		bindings: {
			username: '<',
			email: '<',
			password: '<',
			checkCredentials: '&',
			showSpinner: '<',
			loginResponse: '<',
			showLoginResponse: '<'
		} 
	})

})();