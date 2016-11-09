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
    this.auth = {
      isAuth: false
    };
  this.checkUser = function (email, password) {  
      var deferred = $q.defer();
      if((email===this.testAccount.email)
      & password === this.testAccount.password) {
        this.currentUser.username = this.testAccount.username;
      localStorage.user = angular.toJson(this.currentUser);
      this.auth.isAuth = true;
      localStorage.auth = true;
        deferred.resolve("login successfull");
      } else {

        deferred.reject("email or password incorrect")
      };
      return deferred.promise;
  };

  this.logout = function() {
      this.auth.isAuth = false;
      localStorage.auth = false;
      this.currentUser.username = 'Guest'
  }

  this.getCurrentUser = function() {
    if(localStorage.user !== undefined) {
      this.currentUser = angular.fromJson(localStorage.user);
    } 
    return this.currentUser;
  };

  this.checkLogin = function() {
    if(localStorage.auth !== undefined) {
      this.auth.isAuth = localStorage.auth;

    } 
    return this.auth.isAuth;
  }

  this.sum = function(a, b) {
    return a + b
  }
};

})();