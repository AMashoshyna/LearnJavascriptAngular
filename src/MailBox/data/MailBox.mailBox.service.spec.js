describe('MailBoxService', function() {
    var $httpBackend,
        apiPath;
    var mockMails = [{"_id":"5828889d9de15a250410ed73",
        "mailbox":"580c8cc99de15a250410dbbf",
        "subject":"test123",
        "body":"Lorem ipsum dolor sit amet",
        "to":"test@test.com"},
        {"_id":"582098e39de15a250410ecdb",
            "mailbox":"580ca4e99de15a250410dbc9",
            "subject":"test",
            "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "to":"test@test.com",
        "selected": true},
        {"_id":"582098e39de15a250410ecdb",
            "mailbox":"580c8cc99de15a250410dbbf",
            "subject":"test",
            "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "to":"test@test.com"},
        {"_id":"582098e39de15a250410ecdb",
            "mailbox":"580c94289de15a250410dbc0",
            "subject":"test",
            "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "to":"test@test.com"},
        {"_id":"582098e39de15a250410ecdb",
            "mailbox":"580c8c949de15a250410dbbe",
            "subject":"test",
            "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "to":"test@test.com"}
    ];
    var mockOneMail = [{"_id":"5828889d9de15a250410ed73"}];

    beforeEach(module('MailBox'));
    beforeEach(inject(function( _$httpBackend_, _apiPath_, MailBoxService) {
        $httpBackend = _$httpBackend_;
        apiPath = _apiPath_;
        $httpBackend.whenGET(apiPath + '/letters').respond(mockMails);
        $httpBackend.whenGET(apiPath + '/letters/' + jasmine.any(String)).respond({data: mockOneMail});
        $httpBackend.whenPOST(apiPath + '/letters', jasmine.any(Object)).respond(mockOneMail);
    }))
    it('.getAllMails() method should change data object', inject(function(MailBoxService) {
        MailBoxService.getAllMails().then((response) => {
            expect(MailBoxService.data).toEqual(mockMails)
        });
    }));
    it(' getSelectedInboxItems() method should return selected inbox items', inject(function(MailBoxService) {
        MailBoxService.data = {};
        MailBoxService.data.inbox = mockMails;
        expect(MailBoxService.getSelectedInboxItems()).toContain(mockMails[1])
    }));
    it(' getSelectedInboxItems() method should return undefined', inject(function(MailBoxService) {
        MailBoxService.data = undefined;
        expect(MailBoxService.getSelectedInboxItems()).toBeUndefined();
    }));
    it('getSelectedDraftsItems() method should return selected draft items', inject(function(MailBoxService) {
        MailBoxService.data = {};
        MailBoxService.data.drafts = mockMails;
        expect(MailBoxService.getSelectedDraftsItems()).toContain(mockMails[1])
    }));
    it(' getSelectedDraftsItems() method should return undefined', inject(function(MailBoxService) {
        MailBoxService.data = undefined;
        expect(MailBoxService.getSelectedDraftsItems()).toBeUndefined();
    }));
    it('getSelectedSentItems() method should return selected sent items', inject(function(MailBoxService) {
        MailBoxService.data = {};
        MailBoxService.data.sent = mockMails;
        expect(MailBoxService.getSelectedSentItems()).toContain(mockMails[1])
    }));
    it(' getSelectedSentItems() method should return undefined', inject(function(MailBoxService) {
        MailBoxService.data = undefined;
        expect(MailBoxService.getSelectedSentItems()).toBeUndefined();
    }));
    it(' getSelectedSpamItems() method should return selected spam items', inject(function(MailBoxService) {
        MailBoxService.data = {};
        MailBoxService.data.spam = mockMails;
        expect(MailBoxService.getSelectedSpamItems()).toContain(mockMails[1])
    }));
    it(' getSelectedSpamItems() method should return undefined', inject(function(MailBoxService) {
        MailBoxService.data = undefined;
        expect(MailBoxService.getSelectedSpamItems()).toBeUndefined();
    }));
    it(' getOneMail method should return mock mail', inject(function(MailBoxService){
        MailBoxService.getOneMail(jasmine.any(String)).then((response) => {
            expect(response.data).toContain({"_id":"5828889d9de15a250410ed73"});
        });
    }));
    it(' newMail method should add new item to data Array',  inject(function(MailBoxService, $httpBackend){
        MailBoxService.data = {};
        MailBoxService.data.sent = [];
        MailBoxService.newMail();
        $httpBackend.flush();
        expect(MailBoxService.data.sent[MailBoxService.data.sent.length - 1]).toEqual([{"_id":"5828889d9de15a250410ed73"}]);
        expect(MailBoxService.showSentMessage.value).toBeTruthy();
    }));

})
