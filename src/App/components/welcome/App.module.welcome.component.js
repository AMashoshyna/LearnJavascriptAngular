angular.module('myApp')
.component('welcome', {
	templateUrl: 'src/App/components/welcome/welcomeComponent.html',
	bindings: {
		username: '<'
	}
});

