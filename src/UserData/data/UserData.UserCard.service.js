(function() {
	'use strict';

	angular.module('UserData')

.service('UserCardService', UserCardService);

UserCardService.$inject = ['$http']
function UserCardService($http) {
	var service = this;

	this.getUserData = function() {
		return $http.get('//test-api.javascript.ru/v1/amashoshyna/users')
		.then((response) => response.data);
	};

		this.getUser = function(userId) {
		return $http.get('//test-api.javascript.ru/v1/amashoshyna/users/'+ userId)
		.then((response) => response.data);
	};

	this.getRandomUser = function() {
		// return $http.get('https://randomuser.me/api/')
		// .then((response) => response.data);
	}

	this.addUser = (newUser) => {
		return $http.post('//test-api.javascript.ru/v1/amashoshyna/users', newUser)
		.then((response) => response.data);
	};

	this.removeUser = function(user) {
		return $http.delete('//test-api.javascript.ru/v1/amashoshyna/users/'+ user._id)
		.then((response) => response.data);
	};


};
})();