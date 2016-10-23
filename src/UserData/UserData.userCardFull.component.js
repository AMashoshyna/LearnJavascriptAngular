(function() {
	'use strict';

	angular.module('UserData')

	.component('userCardFull',  {
		templateUrl: 'src/templates/userCardFull.html',
		bindings: {
			user: '<'
		}

  });



})();