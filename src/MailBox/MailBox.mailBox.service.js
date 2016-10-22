(function() {
	'use strict';
	angular.module('MailBox')
	.service('MailBoxService', MailBoxService);

	MailBoxService.$inject = ['$http'];
	function MailBoxService($http) {
    var service = this;
    service.mailboxes;
    service.mailbox;


    /* -----MAILBOXES MANAGEMENT------*/
    this.mailBoxCreation = function(mailbox) {
     $http.get('//test-api.javascript.ru/v1/amashoshyna/mailboxes')
     .then((response) => response.data)
     .then((data) => {service.mailboxes =data; 
       if(service.mailboxes[0]) {
        service.mailbox = service.mailboxes[0];
      }
    })
   };

   this.makeNewMailBox = function(mailboxname) {
    $http.get('//test-api.javascript.ru/v1/amashoshyna/mailboxes')
    .then((response) => {response.data})
    .then((data) => {
      if(this.checkIfMailBoxExists(mailboxname) ) {
        alert("Folder " + mailboxname + " already exists in your mailbox")

      } else {

    return $http.post('//test-api.javascript.ru/v1/amashoshyna/mailboxes', {"title": mailboxname})
    .then((response) => response.data);

      }

    })

  }
  this.checkIfMailBoxExists = function(list, mailboxname) {
    for(var i = 0; i < list.length; i++) {
      var mailbox = list[i];
      if (mailbox.title !== mailbox) {
       continue;
     } else {
      return true;
    } 
  };
  return false;
}

this.getMailBox = function() {    
  return service.mailbox;
}

/* ----MAILS MANAGEMENT----*/
this.getAllMails = function() {
  return $http.get('//test-api.javascript.ru/v1/amashoshyna/letters')
  .then((response) => response.data);
};

this.getMail = function(mailId) {
  return $http.get('//test-api.javascript.ru/v1/amashoshyna/letters/' + mailId)
  .then((response) => response.data);
};

this.newMail = function(newMail) {
  return $http.post('//test-api.javascript.ru/v1/amashoshyna/letters', newMail)
  .then((response) => response.data);
};

this.removeMail = function(mailId) {
  console.log(mailId);
  return $http.delete('//test-api.javascript.ru/v1/amashoshyna/letters/'+ mailId)
  .then((response) => response.data);
}
}
})();