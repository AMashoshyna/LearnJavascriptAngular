(function(){
	'use strict';

	angular.module('UserData')

	.component('contacts', {
	template: `<user-list-preview users="$ctrl.users"></user-list-preview><ui-view><loading-spinner></loading-spinner></ui-view>`,
	bindings: {
		users: '<'
	}
});


})();