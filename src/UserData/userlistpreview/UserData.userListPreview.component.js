(function() {
	'use strict';
angular.module('UserData')
.component('userListPreview', {
	templateUrl: 'src/UserData/userlistpreview/userListPreview.html',
	bindings: {
		users: '<'
	}
})
})();
