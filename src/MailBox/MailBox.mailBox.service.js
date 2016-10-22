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

    // this.response;
    // $http.get('//test-api.javascript.ru/v1/amashoshyna/mailboxes')
    // .then((response) => {return response.data})
    // .then((data) => {
    //   if(this.checkIfMailBoxExists(data, mailboxname) === true) {
    //     alert("Folder " + mailboxname + " already exists in your mailbox");


    //   } else {

    return $http.post('//test-api.javascript.ru/v1/amashoshyna/mailboxes', {"title": mailboxname})
    .then((response) => {return response.data});



//       }

//     })
// debugger;
// return this.response 
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
    this.getFolders().then((folders) =>{
      debugger;
          for(var i = 0; i < folders.length; i++) {
      var mailbox = folders[i];
      if (mailbox.title !== mailboxname) {
       continue;
     } else {
      return true;
    } 
  };
    })
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
  return $http.delete('//test-api.javascript.ru/v1/amashoshyna/letters/'+ mailId)
  .then((response) => response.data);
}
}
})();