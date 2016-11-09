(function() {
	'use strict';
	angular.module('MailBox')
	.service('MailBoxService', MailBoxService);

	MailBoxService.$inject = ['$http','$timeout'];
	function MailBoxService($http, $timeout) {
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
      return;
    } 
    result = false;
  };
  this.check = result;
  return result;
})
// return this.check;
}

this.getMailBox = function() {    
  return service.mailbox;
}

/* ----MAILS MANAGEMENT----*/
this.data = {};
this.getAllMails = function() {
  return $http.get('//test-api.javascript.ru/v1/amashoshyna/letters')
  .then((response) => {
    this.data.mails = response.data;  

    var inbox = response.data.filter((item) => {
    return item.mailbox === '580ca4e99de15a250410dbc9'})
    this.data.inbox = inbox;

    var drafts = response.data.filter((item) => {
    return item.mailbox === '580c8cc99de15a250410dbbf'})
    this.data.drafts = drafts;

    var spam = response.data.filter((item) => {
    return item.mailbox === '580c8c949de15a250410dbbe'})
    this.data.spam = spam;

    return response.data;
  });
};


this.getMail = function(mailId) {
  return $http.get('//test-api.javascript.ru/v1/amashoshyna/letters/' + mailId)
  .then((response) => response.data);
};

this.showSentMessage ={};

this.newMail = function(newMail) {
  return $http.post('//test-api.javascript.ru/v1/amashoshyna/letters', newMail)
  .then((response) => {
    this.showSentMessage.value = true;
    this.data.inbox.push(response.data);
  });
};

this.showDraftMessage = {};

this.saveToDrafts = function(newMail) {
  newMail.mailbox = '580c8cc99de15a250410dbbf';
  return $http.post('//test-api.javascript.ru/v1/amashoshyna/letters', newMail)
  .then((response) => {
    this.showDraftMessage.value = true;
    this.data.drafts.push(newMail)
    var that= this;

    // $timeout(function() {
    //   that.showDraftMessage.value = false;
    // }, 2000);
  });
};

this.moveToSpam = function(mail) {
  mail.mailbox = '580c8c949de15a250410dbbe';
  return $http.post('//test-api.javascript.ru/v1/amashoshyna/letters', mail)
  .then((response) => {
  this.data.spam.push(mail);
  this.data.inbox.splice(this.data.inbox.indexOf(mail),1);

  });
}

this.removeMail = function(mailId) {
  return $http.delete('//test-api.javascript.ru/v1/amashoshyna/letters/'+ mailId)
  .then((response) => 
   this.getAllMails());
};

this.editMail = function(mailId, property, value) {
  return $http.delete('//test-api.javascript.ru/v1/amashoshyna/letters/'+ mailId, {property: value} )
  .then((response) => response.data);

}
}
})();