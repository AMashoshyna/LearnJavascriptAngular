(function() {
	'use strict';

	angular.module('UserData')

	.component('userCard',  {
	bindings: {
		userData: '<',
		index:'<',
		removeUser: '&'
	},
      templateUrl: 'src/templates/userCardTemplate.html',
      controller: UserCardController 
  });

	function UserCardController(UserCardService) {
	var ctrl = this;
}
})();