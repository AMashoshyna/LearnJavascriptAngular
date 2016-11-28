(function() {
	'use strict';
	angular.module('UserData')
	.component('editProfile', {
		templateUrl: 'src/UserData/components/editprofile/editProfile.html',
		bindings: {
			user: '<'
		},
		controller: EditProfileController
	});

	EditProfileController.$inject = ['UserCardService', '$state'];
	function EditProfileController(UserCardService, $state) {
		var ctrl = this;
		ctrl.editUserData = editUserData;

		function editUserData(user) {
			UserCardService.editUserData(user).then((response)=> {
				this.user = response;
				this.user.birthdate = new Date(Date.parse(response.birthdate));
				$state.go('userdetail', {'userId': this.user._id})
			})
		};
		this.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
	}
})(); 
