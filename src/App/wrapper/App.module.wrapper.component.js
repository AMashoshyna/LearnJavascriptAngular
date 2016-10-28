

	angular.module('myApp')
	.component('wrapperElement', {
		template: 
		`
<div class="container">
<div class="navbar navbar-default">	
<div class="container-fluid">
<div class="navbar-left">   
<ul class="nav nav-pills">
          <li  ng-class="{active: $state.includes('users')}"><a ui-sref="users">CONTACTS</a></li>
          <div>{{$scope.$state}}</div>
          <li ng-class="{active: $state.includes('mails')}"><a ui-sref="inbox" >MAILBOX</a></li>
   	   </ul> 
   	   </div>
   	   <p class="navbar-text navbar-right">Signed in as: <b>{{$ctrl.user.username}}</b> <button ui-sref="login" ng-if="!$ctrl.loggedIn">Sign in</button></p>
   	   </div>  
   	   </div> 

       <ui-view></ui-view>
       </div>
       `,
       controller: AppModuleController
	
	});

	AppModuleController.$inject = ['AccessControl'];
	function AppModuleController(AccessControl, $stateProvider, $urlRouterProvider) {
		this.user = AccessControl.getCurrentUser();
		this.loggedIn = AccessControl.checkLogin();
		// this.showMailButton = function($state) {
		// 	if($state.current.parent.name.includes('mail')){
		// 		console.log($state);
		// 		return false;
		// 	};
		// 	console.log('false');
		// 		console.log($state.current.parent.name);

		// 	return true;

		// }
	}

