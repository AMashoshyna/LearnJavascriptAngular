(function() {
	'use strict';

	angular.module('myApp',['UserData', 'MailBox', 'ui.router'])
	.run( ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams; 
}
])
	.controller('LoginController', LoginController)
	.controller('SuccessController', SuccessController);

	function LoginController() {
		this.username = "John Doe";
  this.email = "test@mail.com";
  this.password = "test";

  this.checkCredentials = function() {
  	this.showSpinner = true;
  }
  
};

function SuccessController(username) {
	this.username = username;
}
})();



