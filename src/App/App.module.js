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
  .controller('MailsController', MailsController)

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

// UserController.$inject = ['users'];
// function UserController(users) {
//   this.users = users;
// };

UserController.$inject = ['UserCardService'];
function UserController(UserCardService) {
  UserCardService.getUserData();
  // this.users = users;
};

// MailsController.$inject = ['mails'];
// function MailsController(mails) {
//   this.mails = mails;
// };

MailsController.$inject = ['MailBoxService'];
function MailsController(MailBoxService) {
  MailBoxService.getAllMails();
   // MailBoxService.getInbox();
    // MailBoxService.getDrafts();
}



})();



