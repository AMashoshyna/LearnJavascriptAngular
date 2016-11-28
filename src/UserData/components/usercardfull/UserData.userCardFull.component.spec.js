describe('userCardFull component', function() {
    var controller, UserCardService, $state, $window, $rootScope;
    beforeEach(module('UserData'));
    beforeEach(inject(function($componentController, _UserCardService_, _$state_, _$window_, _$rootScope_){
        UserCardService = _UserCardService_;
        $window = _$window_;
        $rootScope = _$rootScope_;
        spyOn(UserCardService, 'removeUser').and.stub();
        spyOn($window, 'confirm').and.returnValue(true);
        $state = _$state_;
        controller = $componentController('userCardFull', {
            UserCardService: UserCardService,
            $state: $state,
            $window: $window
        });
    }));
    it('should request user"s confirmation', function() {
        controller.removeUser();
        $rootScope.$digest();
        expect($window.confirm).toHaveBeenCalledWith('Are you sure you want to delete this user from contact list?');
    })
    it('should call UserCardService removeUser method', function(){
        $rootScope.$apply(controller.removeUser());
        expect(UserCardService.removeUser).toHaveBeenCalled();
    });
    it('should change state to "list" after successful removal', function() {
        controller.removeUser();
        $rootScope.$digest();
        expect($state.current.name).toBe('list');
    })


})