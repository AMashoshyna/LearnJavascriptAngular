(function() {
angular.module('myApp')
.component('wrapperElement', {
	templateUrl: 'src/App/components/wrapper/wrapperComponent.html',
	controller: AppModuleController
});

AppModuleController.$inject = ['AccessControl', '$state'];
function AppModuleController(AccessControl, $state) {
	this.user = AccessControl.getCurrentUser();
	this.loggedIn = AccessControl.auth;
	this.logout = function() {
		AccessControl.logout();
		$state.go('login')
	}
	this.$state = $state;
}
})();