describe('UserListPreview component', function() {
    var controller,
        UserCardService,
        element,
        parentScope,
        $rootScope,
        $compile,
        $httpBackend;
    beforeEach(module('UserData'));
    beforeEach(module('my.templates'));
    beforeEach(inject(function(_$rootScope_, _$componentController_, _UserCardService_, _$compile_, _$templateCache_, _$httpBackend_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        UserCardService = _UserCardService_;
        $httpBackend = _$httpBackend_;
        var template = _$templateCache_.get('src/UserData/components/userlistpreview/userListPreview.html');
        _$templateCache_.put('src/UserData/components/userlistpreview/userListPreview.html', template);
        // $httpBackend.whenGET('src/UserData/components/userlistpreview/userListPreview.html').passThrough();
        parentScope = $rootScope.$new();
        element = angular.element('<user-list-preview></user-list-preview>');
        $compile(element)(parentScope);
        parentScope.$digest();
        var MockUserCardService = {
            allUsersData: {
                users: {
                    user1: 'name1',
                    user2: 'name2'
                }
            }
        };
        controller = _$componentController_('userListPreview', {
            UserCardService: MockUserCardService
        });
        this.findIn = function(element, selector){
            return angular.element(element[0].querySelector(selector));
        }

    }));
    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.whenGET('src/UserData/components/userlistpreview/userListPreview.html').respond(200, '');
    }));
    xit('should bind user data to UserCardService', function() {
        expect(controller.usersData).toEqual({users: {user1: 'name1', user2: 'name2'}});
    });
    xit('should show number of registered contacts', function() {
        var elemContent = this.findIn(element, '.js-contacts-number').text();
        $rootScope.$digest();
        expect(elemContent).toEqual('blabla');
    });
    xit('should transition to new user registration view', function() {
        expect($state.current.name).toBe('newuser');

    });
    xit('should transition to chosen user"s detail view', function() {

    });
    xit('should provide search of particular user', function() {

    })

})