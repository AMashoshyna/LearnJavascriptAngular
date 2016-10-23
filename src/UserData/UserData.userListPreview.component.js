(function() {
	'use strict';
angular.module('UserData')
.component('userListPreview', {
	templateUrl: 'src/templates/userListPreview.html',
	bindings: {
		users: '<'
	}
})
})();
