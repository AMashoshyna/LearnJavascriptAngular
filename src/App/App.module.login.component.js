
(function() {
		angular.module('myApp')
	.component('login', {
		templateUrl: 'src/templates/loginComponent.html',
		bindings: {
			username: '<',
			email: '<',
			password: '<'
		} 
	})

})();