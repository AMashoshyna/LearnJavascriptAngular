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
		var ctrl = this;
		ctrl.addFolder = addFolder;
		ctrl.removeFolder = removeFolder;

		function removeFolder(folder) {
			MailBoxService.removeFolder(folder._id)
			.then(()=> {
				this.folders.splice(this.folders.indexOf(folder), 1)
			});
		};

		function addFolder(folderName) {
			MailBoxService.makeNewMailBox(folderName)
			.then((response) => {
				this.folders.push(response)});
		}
	}
})();

