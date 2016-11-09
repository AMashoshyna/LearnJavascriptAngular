(function() {
	'use strict';
	angular.module('MailBox')

  .service('MailBoxService', MailBoxService)

	MailBoxService.$inject = ['$http','$timeout', 'apiPath'];
	function MailBoxService($http, $timeout, apiPath) {
    var service = this;
    service.mailboxes;
    service.mailbox;


    /* -----MAILBOXES MANAGEMENT------*/
    this.mailBoxCreation = function(mailbox) {
     $http.get(apiPath + '/mailboxes')
     .then((response) => response.data)
     .then((data) => {service.mailboxes =data; 
       if(service.mailboxes[0]) {
        service.mailbox = service.mailboxes[0];
      }
    })
   };

   this.makeNewMailBox = function(mailboxname) {
      return $http.post(apiPath + '/mailboxes', {"title": mailboxname})
      .then((response) => {return response.data});
};

this.getFolders = function() {
  return $http.get(apiPath + '/mailboxes')
  .then((response) => {return response.data});
};
this.removeFolder = function(folderId) {
  return $http.delete(apiPath + '/mailboxes/'+ folderId)
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
  return $http.get(apiPath + '/letters')
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
  return $http.get(apiPath + '/letters/' + mailId)
  .then((response) => response.data);
};

this.showSentMessage ={};

this.newMail = function(newMail) {
  return $http.post( apiPath + '/letters', newMail)
  .then((response) => {
    this.showSentMessage.value = true;
    this.data.inbox.push(response.data);
  });
};

this.showDraftMessage = {};

this.saveToDrafts = function(newMail) {
  newMail.mailbox = '580c8cc99de15a250410dbbf';
  return $http.post(apiPath + '/letters', newMail)
  .then((response) => {
    this.showDraftMessage.value = true;
    this.data.drafts.push(newMail)
    var that= this;
  });
};

this.moveToSpam = function(mail) {
  mail.mailbox = '580c8c949de15a250410dbbe';
  return $http.post(apiPath + '/letters', mail)
  .then((response) => {
  this.data.spam.push(mail);
  this.data.inbox.splice(this.data.inbox.indexOf(mail),1);

  });
}

this.deleteMessageMsg = {
  deleting: false,
  deleted: false
}
this.removeMail = function(mailId) {
  confirm('Are you sure you want to delete selected items?');
this.deleteMessageMsg.deleting = true;
 
  return $http.delete(apiPath + '/letters/'+ mailId)
      .then((response) => {
   this.getAllMails();
 this.deleteMessageMsg.deleting = false;  
      }
 );
};

this.editMail = function(mailId, property, value) {
  return $http.patch(apiPath + '/letters/'+ mailId, {property: value} )
  .then((response) => response.data);

}
}
})();