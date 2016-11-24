(function() {
	'use strict';

	angular.module('UserData')
		.service('UserCardService', UserCardService);

	UserCardService.$inject = ['$http', 'apiPath'];

	function UserCardService($http, apiPath) {
		var service = this;

		service.addUser = addUser;
		service.editUserData = editUserData;
		service.getAllUsers = getAllUsers;
		service.getOneUser = getOneUser;
		service.removeUser = removeUser;
		service.allUsersData = {};
		service.singleUserData = {};

		function addUser(newUser) {
			return $http.post(apiPath + '/users', newUser)
					.then((response) => {
					this.allUsersData.users.push(response.data);
		})
		}

		function editUserData(user) {
			return $http.patch(apiPath + '/users/' + user._id, user)
					.then((response) => response.data)
		}

		function getAllUsers() {
			return $http.get(apiPath + '/users')
					.then((response) => {
					for (var i = 0; i < response.data.length; i++) {
				response.data[i] = processName(response.data[i]);
			}
			// function processName(user) {
			//   user.firstName = user.fullName.slice(0, user.fullName.indexOf(' '));
			//   user.lastName = user.fullName.slice(user.fullName.indexOf(' ') + 1, user.fullName.length)
			//   return user;
			// }
			service.allUsersData.users = response.data;
			return response.data;
		})
		}

		function getOneUser(userId) {
			return $http.get(apiPath + '/users/' + userId)
				.then((response) => {
				service.singleUserData.user = response.data;
		})
		}

		function processName(user) {
			user.firstName = user.fullName.slice(0, user.fullName.indexOf(' '));
			user.lastName = user.fullName.slice(user.fullName.indexOf(' ') + 1, user.fullName.length)
			return user;
		}

		function removeUser(user) {
			$http.delete(apiPath + '/users/' + user._id)
		}
	}
})();