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
    }
  this.checkUser = function (email, password) {  
      var deferred = $q.defer();
      if((email===this.testAccount.email)
      & password === this.testAccount.password) {
        this.currentUser.username = this.testAccount.username;
        deferred.resolve("login successfull");
      } else {

        deferred.reject("email or password incorrect")
      };
      return deferred.promise;
  };

  this.getCurrentUser = function() {
    return this.currentUser;
  };
  this.checkLogin = function() {
    if(this.currentUser.username !== 'Guest') {
      return true;

    } 
    return false;
  }
};

})();