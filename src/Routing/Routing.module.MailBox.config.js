(function() {
    'use strict';

    angular.module('Routing')
        .config(RouterMailBoxConfig);

    RouterMailBoxConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouterMailBoxConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('inbox', {
                url: '/inbox',
                parent:'mails',
                template: `<mail-list></mail-list>`,
                params: {
                    mailId: null
                }
            })
            .state('newmail', {
                url: '/newmail:?useremail',
                parent:'mails',
                params: {
                    useremail: null
                },
                template: `<new-mail></new-mail>`
            })
            .state('mailfullview', {
                url: '/mailfullview/:mailId' ,
                parent:'mails',
                template: `<mail-item-full-view  mail="mailboxCtrl.mail"></mail-item-full-view>`,
                params: {
                    mailId: null,
                    removeMail: null
                },
                resolve: {
                    mail: ['$stateParams', 'MailBoxService',
                        function($stateParams, MailBoxService) {
                            return MailBoxService.getOneMail($stateParams.mailId);
                        }]
                },
                controller: ['mail', function(mail) {
                    this.mail = mail;
                }],
                controllerAs: 'mailboxCtrl'
            })
            .state('sentreport', {
                template: '<div class="panel panel-info"><h4>Your mail has been sent.</h4></div>',
                url: '/mailsent',
                parent:'mails',
                onEnter: function($state, $timeout) {
                    $timeout(()=>{$state.go('inbox')}, 2000)
                }
            })
            .state('draftsaved', {
                template: '<div class="panel panel-info"><h4>Your draft has been saved.</h4></div>',
                url: '/draftsaved',
                parent:'mails',
                onEnter: function($state, $timeout) {
                    $timeout(()=>{$state.go('inbox')}, 2000)
                }
            })
            .state('drafts', {
                url: '/drafts',
                parent: 'mails',
                template: '<draft-items></drafts-items>'
            })
            .state('spam', {
                url: '/spam',
                parent: 'mails',
                template: '<spam-items></spam-items>'
            })
            .state('sent', {
                url: '/sent',
                parent: 'mails',
                template: '<sent-items></sent-items>'
            })
            .state('editmailitem', {
                url: '/edit/:mailId',
                parent: 'mails',
                template: '<edit-mail-item mail = "editMailCtrl.mail"></edit-mail-item>',
                params: {
                    mailId: null
                },
                resolve: {
                    mail: ['MailBoxService', '$stateParams', function(MailBoxService, $stateParams) {
                        return MailBoxService.getOneMail($stateParams.mailId)
                    }]
                },
                controller: ['mail', function(mail) {
                    this.mail = mail;
                }],
                controllerAs: 'editMailCtrl'
            })
            .state('folders', {
                url:  '/folders',
                parent:'mails',
                template: '<mail-folders folders = "foldersCtrl.folders"></mail-folders>',
                resolve: {
                    folders: ['MailBoxService', function(MailBoxService) {
                        return MailBoxService.getFolders().then((folders) => {
                                folders.forEach(function(folder) {
                                if(folder.title.toLowerCase() === 'inbox'
                                    || folder.title === 'sent'
                                    || folder.title === 'drafts'
                                    || folder.title ==='spam'
                                )
                                {
                                    folder.removeable = false;
                                    folder.priority = 1;

                                } else {
                                    folder.removeable = true;
                                    folder.priority = 2;
                                }
                            });
                        return folders;
                    })
                    }]
                },
                controller: ['folders', function(folders) {
                    this.folders = folders;
                }]
            })
    }
})();