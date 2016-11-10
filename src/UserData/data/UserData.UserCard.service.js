(function() {
	'use strict';

	angular.module('UserData')

.service('UserCardService', UserCardService);

UserCardService.$inject = ['$http', 'apiPath']
function UserCardService($http, apiPath) {
	var service = this;
	this.usersData = {};
	this.userData = {};

	this.getUserData = function() {
		return $http.get(apiPath + '/users')
		.then((response) => {

				for(var i= 0; i < response.data.length; i++) {
		response.data[i] = processName(response.data[i]);
	}
	function processName(user) {
		user.firstName = user.fullName.slice(0, user.fullName.indexOf(' '));
		user.lastName = user.fullName.slice(user.fullName.indexOf(' ') +1, user.fullName.length)
		return user;
		
	}
			this.usersData.users = response.data;
			return response.data;
		});
	};

		this.getUser = function(userId) {
		return $http.get(apiPath + '/users/'+ userId)
		.then((response) => {
			this.userData.user = response.data;
			return response.data;
		});
	};


	this.addUser = (newUser) => {
		return $http.post(apiPath + '/users', newUser)
		.then((response) => {
			this.usersData.users.push(response.data);
			return response.data;
		});
	};

	this.removeUser = function(user) {
	
		return $http.delete(apiPath + '/users/'+ user._id)
		// .then((response) => response.data);
	};

	this.editUserData = function(user) {
		return $http.patch(apiPath + '/users/' + user._id, user)
		.then((response) => response.data);
	}


};
})();