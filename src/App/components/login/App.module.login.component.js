(function() {
	angular.module('myApp')
	.component('login', {
		templateUrl: 'src/App/components/login/loginComponent.html',
		bindings: {
			showSpinner: '<'
		},
		controller: LoginComponentController
	});

	LoginComponentController.$inject = ['AccessControl', '$state'];
	function LoginComponentController(AccessControl, $state) {
		var ctrl = this;
		ctrl.checkCredentials = checkCredentials;
		ctrl.email = "test@mail.com";
		ctrl.loginResponse ='';
		ctrl.password = "test";
		ctrl.showLoginResponse = false;

		function checkCredentials(email, password) {
			this.showSpinner = true;
			AccessControl.checkUser(email, password)
			.then((response) => {this.loginResponse = response;
				this.showSpinner = false ;
				this.showLoginResponse = true;
				$state.go('success')},
				(errorMessage) => {this.loginResponse = errorMessage;
					this.showSpinner = false;
					this.showLoginResponse = true;})
		}
	}
})();