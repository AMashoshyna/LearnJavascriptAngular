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
	.controller('SuccessController', SuccessController)
  .controller('UserController', UserController)

LoginController.$inject = ['AccessControl', '$stateParams','$state'];
	function LoginController(AccessControl, $stateParams, $state) {
	this.username = "John Doe";
  this.email = "test@mail.com";
  this.password = "test";
  this.loginResponse ='';
  this.showLoginResponse = false;


  this.checkCredentials = function(email, password) {
  	this.showSpinner = true;
  	AccessControl.checkUser(email, password)
  	.then((response)=>{this.loginResponse = response; this.showSpinner = false ; 
  		this.showLoginResponse = true; $state.go('success')}, 
  		(errorMessage)=>{this.loginResponse = errorMessage; this.showSpinner = false; 
  		this.showLoginResponse = true;});

  }
  
};

function SuccessController(username) {
	this.username = username;
}

function UserController() {

}
})();



