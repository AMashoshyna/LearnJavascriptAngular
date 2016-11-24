describe('login component', function() {
    var AccessControl, controller, $rootScope, $state;
    beforeEach(module('myApp'));
    beforeEach(inject(function(_AccessControl_, $q, $componentController, _$rootScope_, _$state_) {
        AccessControl = _AccessControl_;
        $state = _$state_;
        controller = $componentController('login', {
            AccessControl: AccessControl,
            $state: $state
        });
        $rootScope = _$rootScope_;
        spyOn(AccessControl,'checkUser').and.returnValue($q.resolve('test value'));
        spyOn($state, 'go');
    }));
    it('checkCredentials method should call AccessControl service', function() {
        controller.checkCredentials();
        $rootScope.$apply();
        expect(AccessControl.checkUser).toHaveBeenCalled();
        expect(controller.showLoginResponse).toBe(true);
        expect(controller.loginResponse).toEqual('test value');
        expect($state.go).toHaveBeenCalledWith('success');
    })
})