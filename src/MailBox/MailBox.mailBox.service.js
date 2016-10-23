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
      return $http.post('//test-api.javascript.ru/v1/amashoshyna/mailboxes', {"title": mailboxname})
      .then((response) => {return response.data});
};

this.getFolders = function() {
  return $http.get('//test-api.javascript.ru/v1/amashoshyna/mailboxes')
  .then((response) => {return response.data});
};
this.removeFolder = function(folderId) {
  return $http.delete('//test-api.javascript.ru/v1/amashoshyna/mailboxes/'+ folderId)
  .then((response) => response.data);
};

this.checkIfMailBoxExists = function(mailboxname) {
  return 
  this.getFolders().then((folders) =>{
      var result;

    for(var i = 0; i < folders.length; i++) {
      var mailbox = folders[i];
      if (mailbox.title !== mailboxname) {
       continue;
     } else {
      result = true
      console.log('result' + result);
      return;
    } 
    result = false;
  };
  this.check = result;
  console.log('result' + result);
  return result;
})
// return this.check;
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
  return $http.delete('//test-api.javascript.ru/v1/amashoshyna/letters/'+ mailId)
  .then((response) => response.data);
};

this.editMail = function(mailId, property, value) {
  return $http.delete('//test-api.javascript.ru/v1/amashoshyna/letters/'+ mailId, {property: value} )
  .then((response) => response.data);

}
}
})();