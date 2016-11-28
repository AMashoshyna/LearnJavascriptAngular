(function() {
  angular.module('myApp')
  .service('AccessControl', AccessControl);

  AccessControl.$inject = ['$q'];
  function AccessControl($q) {
    var service = this;
    service.checkLogin = checkLogin;
    service.checkUser = checkUser;
    service.getCurrentUser = getCurrentUser;
    service.logout = logout;
    service.testAccount = {
      username: 'John Doe',
      email: 'test@mail.com',
      password: 'test'
    };
    service.currentUser = {username: 'Guest'};
    service.auth = {isAuth: false};;

    function checkUser (email, password) {
      var deferred = $q.defer();
      if((email===this.testAccount.email)
        && password === this.testAccount.password) {
        this.currentUser.username = this.testAccount.username;
      localStorage.user = angular.toJson(this.currentUser);
      this.auth.isAuth = true;
      localStorage.auth = true;
      deferred.resolve("login successfull");
    } else {
      deferred.reject("email or password incorrect")
    }
    return deferred.promise;
  }

  function logout (){
    this.auth.isAuth = false;
    localStorage.auth = false;
    this.currentUser.username = 'Guest'
  }

  function getCurrentUser (){
    if(localStorage.user !== undefined) {
      this.currentUser = angular.fromJson(localStorage.user);
    }
    return this.currentUser;
  }

  function checkLogin () {
    if(localStorage.auth !== undefined) {
      this.auth.isAuth = localStorage.auth;
    }
    return this.auth.isAuth;
  }
}
})();