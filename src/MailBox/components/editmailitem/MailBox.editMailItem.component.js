(function() {
    'use strict';
    angular.module('MailBox')
    .component('editMailItem', {
        templateUrl: 'src/MailBox/components/editmailitem/editmailitem.html',
        bindings: {
            mail: '<'
        },
        controller: EditMailItemController
    });

    EditMailItemController.$inject = ['MailBoxService', '$state']
    function EditMailItemController(MailBoxService, $state) {
        var ctrl = this;
        ctrl.discard = discard;
        ctrl.editMail = editMail;

        function discard() {

        };
        function editMail(mail) {
            MailBoxService.editMail(mail).then((response)=> {
                this.mail = response;
                $state.go('mailfullview', {'mailId': this.mail._id})
            })
        };
    }
})();