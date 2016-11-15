(function() {
	'use strict';

	angular.module('UserData')

	.component('profile',  {
		template: `<div class="container"><div class="row">
		<user-card-full user="$ctrl.user"></user-card-full></div></div>`,
		bindings: {
			users: '<',
			user: '<'
		}
  });
})();