describe('editProfile component', function() {
    var controller,
        UserCardService,
        $state,
    $rootScope;
    beforeEach(module('UserData'));
    beforeEach(inject(function(_$componentController_, _UserCardService_, _$state_, $q, _$rootScope_) {
        UserCardService = _UserCardService_;
        $state = _$state_;
        $rootScope = _$rootScope_;
        spyOn(UserCardService, 'editUserData').and.returnValue($q.resolve({
            birthdate: '01.01.2001',
            _id: '1111'
        }));
        spyOn($state, 'go');
        controller = $componentController('editProfile', {
            UserCardService: UserCardService,
            $state: $state
        })
    }));
    xit('should call UserService editUserData method', inject(function(UserCardService, $rootScope) {
        controller.editUserData();
        $rootScope.$apply();
        expect(UserCardService.editUserData).toHaveBeenCalled();
        expect($state.go).toHaveBeenCalledWith('userdetail', {'userId': controller.user._id});
    }));
})