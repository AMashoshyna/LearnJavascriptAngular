(function() {
	'use strict';
angular.module('UserData')
.component('editProfile', {
	templateUrl: 'src/UserData/editprofile/editProfile.html',
	bindings: {
		user: '<'
	},
	controller: EditProfileController
})

EditProfileController.$inject = [];
function EditProfileController() {

}
})(); 
