(function() {
	'use strict';

	angular.module('UserData')

	.component('profile',  {
		template: `<div class="container"><div class="row">
		<user-list-preview users="$ctrl.users"></user-list-preview>
		<user-card-full user="$ctrl.user"></user-card-full></div></div>`,
		bindings: {
			users: '<',
			user: '<'
		}

  });



})();