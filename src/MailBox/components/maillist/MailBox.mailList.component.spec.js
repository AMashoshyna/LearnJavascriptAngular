describe('mailList component', function() {
    var controller, MailBoxService;
beforeEach(module('MailBox'));
    beforeEach(inject(function($componentController, _MailBoxService_) {
        MailBoxService = _MailBoxService_;
        controller = $componentController('mailList', {
            MailBoxService: MailBoxService,
            $scope: {$on: function() {}}
        });
        spyOn(MailBoxService, 'removeMail');

    }));
    it(' removeMail method should call MailBoxService"s removeMail method', inject(function(MailBoxService) {
        controller.removeMail({_id: 'id'});
        expect(MailBoxService.removeMail).toHaveBeenCalled();

    }))
})