(function() {
	'use strict';
	angular.module('UserData')
	.component('editProfile', {
		templateUrl: 'src/UserData/editprofile/editProfile.html',
		bindings: {
			user: '<',
		},
		controller: EditProfileController
	})

	EditProfileController.$inject = ['UserCardService', '$state'];
	function EditProfileController(UserCardService, $state) {

		this.editUserData = function(user) {
			UserCardService.editUserData(user).then(response=> {
				this.user = response;
				this.user.birthdate = new Date(Date.parse(response.birthdate));
				$state.go('userdetail', {'userId': this.user._id})
			});
		};
	}
})(); 
