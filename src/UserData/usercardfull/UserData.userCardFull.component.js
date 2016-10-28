(function() {
	'use strict';

	angular.module('UserData')

	.component('userCardFull',  {
		templateUrl: 'src/UserData/usercardfull/userCardFull.html',
		bindings: {
			user: '<'
		}

  });



})();