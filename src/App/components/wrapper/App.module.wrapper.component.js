(function() {
	angular.module('myApp')
	.component('wrapperElement', {
		templateUrl: 'src/App/components/wrapper/wrapperComponent.html',
		controller: AppModuleController
	});

	AppModuleController.$inject = ['AccessControl', '$state'];
	function AppModuleController(AccessControl, $state) {
		var ctrl = this;
		ctrl.user = AccessControl.getCurrentUser();
		ctrl.loggedIn = AccessControl.auth;
		ctrl.logout = logout;
		ctrl.$state = $state;

		function logout() {
			AccessControl.logout();
			$state.go('login')
		}
	}
})();