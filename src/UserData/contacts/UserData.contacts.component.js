(function(){
	'use strict';

	angular.module('UserData')

	.component('contacts', {
	template: `<user-list-preview></user-list-preview><ui-view><loading-spinner></loading-spinner></ui-view>`,
	// bindings: {
	// 	users: '<'
	// }
});


})();