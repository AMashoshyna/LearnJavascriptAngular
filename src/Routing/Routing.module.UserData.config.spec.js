describe('UserData ui-router', function() {

	var $state,
	$location,
	$rootScope,
	goTo;

	beforeEach(module('Routing', function($provide) {
		$provide.value('UserCardService', myServiceMock = {});
	}));
	beforeEach(inject(function(_$state_, _$location_, _$rootScope_) {
		$state = _$state_;
		$location = _$location_;
		$rootScope = _$rootScope_;
	}));
	beforeEach(function() {
		goTo =	function (url) {
			$location.url(url);
			$rootScope.$digest();
		};
	});

	describe('path', function() {
		describe('editprofile', function () {
			beforeEach(function() {
				myServiceMock.getOneUser = jasmine.createSpy('getOneUser').and.returnValue('test')
			})
			it('should go to the state editprofile', function() {
				goTo('/editprofile1111');
				expect($state.current.name).toEqual('editprofile');
			});
		});
		describe('list', function() {
			it('should go to the state list', function() {
				goTo('/list');
				expect($state.current.name).toEqual('list');
			});
		})
		describe('userdetail', function() {
			beforeEach(function() {
				myServiceMock.getOneUser = jasmine.createSpy('getOneUser').and.returnValue('test');
				myServiceMock.getAllUsers = jasmine.createSpy('getAllUsers').and.returnValue('test')
			});

			it('should go to the state userdetail', function() {
				goTo('/userdetail' + jasmine.any(String));
				expect($state.current.name).toEqual('userdetail');
			});
		})
		describe('newuser', function() {
			it('should go to the state newuser', function() {
				goTo('/newuser');
				expect($state.current.name).toEqual('newuser');
			});
		});
		describe('unknown states', function() {
			it('should redirect to login state', function() {
				goTo('/blabla');
				expect($state.current.name).toEqual('login');
			})
		});
		describe('other states', function() {
			it('should redirect to login state', function() {
				goTo('/');
				expect($state.current.name).toEqual('login');
			})
		})
	})
})