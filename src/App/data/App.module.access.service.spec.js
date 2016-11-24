describe('myApp', function() {
	var user = {
		email: 'test@mail.com',
		password: 'test'
	};
	var email = 'test@mail.com';
	var password = 'test'

	beforeEach(module('myApp'));
	beforeEach(module('UserData'));
	beforeEach(module('MailBox'));
	beforeEach(function () {
		var store = {};

		spyOn(window.localStorage, 'getItem').and.callFake(function (key) {
			return store[key];
		});
		spyOn(window.localStorage, 'setItem').and.callFake(function (key, value) {
			return store[key] = value + '';
		});
		spyOn(window.localStorage, 'clear').and.callFake(function () {
			store = {};
		});
	});

	describe('service', function() {
		it('should return true', inject(function(AccessControl) {
			AccessControl.checkUser(email, password).then((response)=>{
				expect(response).toBe(true)
			})
		}));
		it('should return true', inject(function(AccessControl) {
			expect(AccessControl.checkLogin()).toBe(localStorage.auth);
		}));
		it('shoud set surrent user equal to Guest', inject(function(AccessControl) {
			AccessControl.logout();
			expect(AccessControl.currentUser.username).toBe('Guest');
		}));
		it('should return current user', inject(function(AccessControl) {
			expect(AccessControl.getCurrentUser()).toEqual(angular.fromJson(localStorage.user));
		}))
	})
})