(function() {
	'use strict';
	angular.module('MailBox')
		.component('mailFolders', {
			templateUrl: 'src/MailBox/components/mailfolders/mailFolders.html',
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
			MailBoxService.makeNewMailBox(folderName)
				.then((response) => {
				this.folders.push(response)});
		}
	}
})();

