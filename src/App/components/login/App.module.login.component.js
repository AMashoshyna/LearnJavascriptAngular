
(function() {
	angular.module('myApp')
		.component('login', {
			templateUrl: 'src/App/components/login/loginComponent.html',
			bindings: {
				showSpinner: '<',
			},
			controller: LoginComponentController
		});

	LoginComponentController.$inject = ['AccessControl', '$stateParams','$state'];
	function LoginComponentController(AccessControl, $stateParams,$state) {
		this.email = "test@mail.com";
		this.password = "test";
		this.loginResponse ='';
		this.showLoginResponse = false;

		this.checkCredentials = function(email, password) {
			this.showSpinner = true;
			AccessControl.checkUser(email, password)
				.then((response)=>{this.loginResponse = response;
			this.showSpinner = false ;
			this.showLoginResponse = true;
			$state.go('success')},
			(errorMessage)=>{this.loginResponse = errorMessage;
				this.showSpinner = false;
				this.showLoginResponse = true;})
		}
	}
})();