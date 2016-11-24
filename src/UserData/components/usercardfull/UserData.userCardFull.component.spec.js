describe('userCardFull component', function() {
    var controller, UserCardService, $state;
    beforeEach(module('UserData'));
    beforeEach(inject(function($componentController, _UserCardService_, _$state_){
        UserCardService = _UserCardService_;
        spyOn(UserCardService, 'removeUser')
        $state = _$state_;
        controller = $componentController(userCardFull, {
            UserCardService: UserCardService,
            $state: $state
        })

    }));
    it('should call UserCardService removeUser method', inject(function(UserCardService){
        controller.removeUser();
        expect(UserCardService.removeUser).toHaveBeenCalled();


    }))


})