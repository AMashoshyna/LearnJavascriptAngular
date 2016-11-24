describe('MailBox ui-router', function() {
    beforeEach(module('MailBox'));
    it("should change to the inbox state", function(){
        inject(function($state, $rootScope){
            $rootScope.$apply(function(){
                $state.go("inbox");
            });
            expect($state.current.name).toEqual("inbox");
        })
    })
})