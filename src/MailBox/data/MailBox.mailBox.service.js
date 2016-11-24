(function() {
    'use strict';
    angular.module('MailBox')
        .service('MailBoxService', MailBoxService);

    MailBoxService.$inject = ['$http', 'apiPath'];

    function MailBoxService($http, apiPath) {
        var service = this;

        service.data = {};
        service.deleteMessageMsg = { deleting: false, deleted: false };
        service.editMail = editMail;
        service.getAllMails = getAllMails;
        service.getOneMail = getOneMail;
        service.getSelectedInboxItems = getSelectedInboxItems;
        service.getSelectedDraftsItems = getSelectedDraftsItems;
        service.getSelectedSentItems = getSelectedSentItems;
        service.getSelectedSpamItems = getSelectedSpamItems;
        service.mailbox;
        service.mailboxes;
        service.moveToSpam = moveToSpam;
        service.newMail = newMail;
        service.removeMail = removeMail;
        service.saveToDrafts = saveToDrafts;
        service.showDraftMessage = {};
        service.showSentMessage = {};

        /* -----MAILBOXES MANAGEMENT------*/
        this.mailBoxCreation = function() {
            $http.get(apiPath + '/mailboxes')
                .then((response) => response.data)
            .then((data) => {
                service.mailboxes = data;
            if (service.mailboxes[0]) {
                service.mailbox = service.mailboxes[0];
            }
        });
        };

        this.makeNewMailBox = function(mailboxname) {
            return $http.post(apiPath + '/mailboxes', {
                    "title": mailboxname
                })
                    .then((response) => {
                    return response.data;
        });
        };

        this.getFolders = function() {
            return $http.get(apiPath + '/mailboxes')
                    .then((response) => {
                    return response.data;
        });
        };
        this.removeFolder = function(folderId) {
            return $http.delete(apiPath + '/mailboxes/' + folderId)
                    .then((response) => response.data);
        };

        this.checkIfMailBoxExists = function(mailboxname) {
            return this.getFolders().then((folders) => {
                    for (var i = 0; i < folders.length; i++) {
                var mailbox = folders[i];
                var result;
                if (mailbox.title !== mailboxname) {
                    continue;
                } else {
                    result = true;
                    return;
                }
                result = false;
            }
            this.check = result;
            return result;
        });
        };

        this.getMailBox = function() {
            return service.mailbox;
        };

        /* ----MAILS MANAGEMENT----*/
        function getAllMails(){
            return $http.get(apiPath + '/letters')
                .then((response) => {
                this.data.mails = response.data;

            this.data.inbox = response.data.filter(function(item) {
                return item.mailbox === '580ca4e99de15a250410dbc9';
            });

            this.data.drafts = response.data.filter(function(item) {
                return item.mailbox === '580c8cc99de15a250410dbbf';
            });

            this.data.sent = response.data.filter(function(item) {
                return item.mailbox === '580c94289de15a250410dbc0';
            });

            this.data.spam = response.data.filter(function(item) {
                return item.mailbox === '580c8c949de15a250410dbbe';
            });
            return this.data;
        })
        }
        function getSelectedInboxItems() {
            if (this.data) {
                return this.data.inbox.filter(function (item) {
                    return item.selected === true;
                });
            }
        };

        function getSelectedDraftsItems() {
            if (this.data){
                return this.data.drafts.filter(function(item) {
                    return item.selected === true;
                });
            }
        }

        function getSelectedSentItems() {
            if (this.data) {
                return this.data.sent.filter((item) => {
                        return item.selected === true;
            });
            }
        }

        function getSelectedSpamItems() {
            if(this.data) {
                return this.data.spam.filter((item) => {
                        return item.selected === true;
            })
            }
        }

        function getOneMail(mailId) {
            return $http.get(apiPath + '/letters/' + mailId)
                    .then((response) => response.data);
        }

        function newMail(newMail) {
            return $http.post(apiPath + '/letters', newMail)
                .then((response) => {
                this.showSentMessage.value = true;
            this.data.sent.push(response.data);
        });
        };

        function saveToDrafts(newMail) {
            newMail.mailbox = '580c8cc99de15a250410dbbf';
            return $http.post(apiPath + '/letters', newMail)
                .then((response) => {
                this.showDraftMessage.value = true;
            this.data.drafts.push(newMail);
            var that = this;
        });
        };

        function moveToSpam(mail) {
            mail.mailbox = '580c8c949de15a250410dbbe';
            return $http.post(apiPath + '/letters', mail)
                    .then((response) => {
                    this.data.spam.push(mail);
            this.data.inbox.splice(this.data.inbox.indexOf(mail), 1);
        });
        };

        function removeMail(mailId) {
            this.deleteMessageMsg.deleting = true;
            return $http.delete(apiPath + '/letters/' + mailId)
                    .then((response) => {
                    this.getAllMails();
            this.deleteMessageMsg.deleting = false;
        });
        };

        function editMail(mail) {
            return $http.patch(apiPath + '/letters/' + mail._id, mail)
                    .then((response) => response.data);
        };
    }
})();