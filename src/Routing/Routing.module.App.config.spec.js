describe('myApp routing', function() {
    var $state,
        $location,
        $rootScope;
    beforeEach(module('Routing'));
    beforeEach(inject(function(_$state_, _$location_, _$rootScope_) {
        $state = _$state_;
        $location = _$location_;
        $rootScope = _$rootScope_;
    }))
    it('should go to login state', function() {
        goTo('/login');
        expect($state.current.name).toBe('login');
    })


    function goTo(url) {
        $location.url(url);
        $rootScope.$digest();
    }
})