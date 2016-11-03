describe('myApp', function() {
	var user = {
      username: 'John Doe',
      email: 'test@mail.com',
      password: 'test'
    };
    var email = 'test@mail.com';
    var password = 'test'

	beforeEach(module('myApp'));
	beforeEach(module('UserData'));
	beforeEach(module('MailBox'));

	describe('service', function() {

		it('should return sum', inject(function(AccessControl) {
			expect(AccessControl.sum(1, 2)).toBe(3)
		}));
		it('should return true', inject(function(AccessControl) {
			expect(AccessControl.checkUser(email, password)).toBe(true)
		}));

	})
})