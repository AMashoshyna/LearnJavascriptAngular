describe('newUserForm componet', function() {
	var scope, form;
	beforeEach(module('UserData'));
	beforeEach(module('my.templates'));
	beforeEach(inject(function($rootScope, $componentController, $templateCache, $compile) {
		scope = $rootScope.new();
		var controller = $componentController('newUserForm', {
			UserCardService: {},
			$state: {},
			$scope: scope
		});
		  templateHtml = $templateCache.get('src/UserData/components/newuserform/newUserForm.html');
		  var formElem = angular.element('<new-user-form></new-user-form>');
		  $compile(formElem)(scope);
		  scope.$apply();

	}))
	xit('should not allow invalid input', function() {
		expect(form.$valid).toBeTruthy();
		form.email.$setViewValue('aaa');
		expect(form.email.$valid).toBeFalsy();
	})

})