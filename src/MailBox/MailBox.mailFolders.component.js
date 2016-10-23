	(function() {
	'use strict';
	angular.module('MailBox')
	.component('mailFolders', {
	  templateUrl: 'src/templates/mailFolders.html',
	  bindings: {
	  	folders: '<'
	  },
	  controller: FoldersController
	  });

function FoldersController(MailBoxService){
	this.removeFolder = function(folder) {
		MailBoxService.removeFolder(folder._id)
		.then(()=> {
			this.folders.splice(this.folders.indexOf(folder), 1)
		});
	};

	this.addFolder = function(folderName) {
		// MailBoxService.checkIfMailBoxExists(folderName).then((response) =>{console.log(response);

		// })
		// console.log((MailBoxService.checkIfMailBoxExists(folderName)))

		// if(MailBoxService.checkIfMailBoxExists(folderName)) {
		// 	alert(alert("Folder " + folderName + " already exists in your mailbox"));
		// 	return;
		// }
		MailBoxService.makeNewMailBox(folderName)
		.then((response) => { 

			this.folders.push(response)});

	}
}
	
})();

