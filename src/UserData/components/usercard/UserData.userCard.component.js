(function() {
	'use strict';

	angular.module('UserData')

	.component('userCard',  {
	bindings: {
		userData: '<',
		index:'<',
		removeUser: '&'
	},
      templateUrl: 'src/UserData/components/usercard/userCardTemplate.html',
  });
})();