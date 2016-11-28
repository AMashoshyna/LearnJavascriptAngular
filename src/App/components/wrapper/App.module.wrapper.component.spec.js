describe('wrapper component', function() {
    var AccessControl, controller, $state;
    beforeEach(module('myApp'));
    beforeEach(inject(function(_AccessControl_, $componentController, _$state_){
        AccessControl = _AccessControl_;
        $state = _$state_;
        controller = $componentController('wrapperElement', {
            AccessControl: AccessControl,
            $state: $state
        });
        spyOn(AccessControl, 'logout');
        spyOn($state, 'go');
    }));
    it('logout method calls AccessControl.logout', function() {
        controller.logout();
        expect(AccessControl.logout).toHaveBeenCalled();
    })
});