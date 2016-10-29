(function() {
		angular.module('myApp')
	.service('AccessControl', AccessControl);

	AccessControl.$inject = ['$q'];
function AccessControl($q) {
      this.testAccount = {
      username: 'John Doe',
      email: 'test@mail.com',
      password: 'test'
    };
    this.currentUser = {
      username: 'Guest'
    };
    this.auth = false;
  this.checkUser = function (email, password) {  
      var deferred = $q.defer();
      if((email===this.testAccount.email)
      & password === this.testAccount.password) {
        this.currentUser.username = this.testAccount.username;
      localStorage.user = angular.toJson(this.currentUser);
      this.auth = true;
      localStorage.auth = true;
        deferred.resolve("login successfull");
      } else {

        deferred.reject("email or password incorrect")
      };
      return deferred.promise;
  };

  this.getCurrentUser = function() {
    if(localStorage.user !== undefined) {
      this.currentUser = angular.fromJson(localStorage.user);
    } 
    return this.currentUser;
  };

  this.checkLogin = function() {
    if(localStorage.auth !== undefined) {
      this.auth = localStorage.auth;

    } 
    return this.auth;
  }
};

})();